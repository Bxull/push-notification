self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title || 'Новое уведомление';
    const options = {
        body: data.body || 'У вас новое сообщение',
        icon: data.icon || 'icon.png',
        badge: data.badge || 'badge.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://your-url.com')
    );
});
