export type NotificationPermissionState = "default" | "granted" | "denied" | "unsupported";

export function getNotificationPermission(): NotificationPermissionState {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return "unsupported";
  }
  return Notification.permission as NotificationPermissionState;
}

export async function requestNotificationPermission(): Promise<NotificationPermissionState> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return "unsupported";
  }

  try {
    const permission = await Notification.requestPermission();
    return permission as NotificationPermissionState;
  } catch (error) {
    console.error("[PWA Notifications] Error requesting permission:", error);
    return "denied";
  }
}

export async function sendLocalNotification(
  title: string,
  options?: NotificationOptions & { url?: string }
): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return false;
  }

  if (Notification.permission !== "granted") {
    const permission = await requestNotificationPermission();
    if (permission !== "granted") return false;
  }

  const notificationOptions: NotificationOptions = {
    icon: "/android-chrome-192x192.png",
    badge: "/favicon-32x32.png",
    vibrate: [100, 50, 100],
    body: options?.body || "Nouvelle information sur DigieWomen School",
    data: { url: options?.url || "/" },
    ...options,
  };

  if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
    const registration = await navigator.serviceWorker.ready;
    await registration.showNotification(title, notificationOptions);
    return true;
  }

  new Notification(title, notificationOptions);
  return true;
}
