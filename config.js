// config.js
const CONFIG = {
    appName: "Sudan Play",
    version: "1.0.0",
    storageKey: "sudanPlayApps",
    defaultAppIcon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
    defaultAppImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
};

const APP_CATEGORIES = ["أخبار", "موسيقى", "تسوق", "تعليم", "أدوات", "ترفيه", "رياضة", "صحة", "سفر"];

// وظائف إدارة البيانات
function getApps() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading apps:', e);
    }
    
    // البيانات الافتراضية
    return [
        {
            id: 1,
            name: "سودان نيوز",
            description: "تطبيق متكامل يقدم آخر الأخبار السودانية من مصادر موثوقة. احصل على التحديثات الفورية والأخبار العاجلة في جميع المجالات.",
            category: "أخبار",
            icon: "https://images.unsplash.com/photo-1586339949216-35c2747cc36c?w=200&h=200&fit=crop",
            image: "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=400&h=200&fit=crop",
            version: "2.1.0",
            rating: "4.8",
            downloads: 12543,
            size: "15 MB",
            screenshots: [
                "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=300&h=600&fit=crop",
                "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
            ],
            downloadUrl: "#"
        },
        {
            id: 2, 
            name: "سودان ميوزك",
            description: "أكبر منصة موسيقية سودانية تحتوي على آلاف الأغاني من التراث السوداني والموسيقى المعاصرة.",
            category: "موسيقى",
            icon: "https://images.unsplash.com/photo-1571974599782-87624638275f?w=200&h=200&fit=crop",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=200&fit=crop",
            version: "1.5.2", 
            rating: "4.9",
            downloads: 28764,
            size: "28 MB",
            screenshots: [
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=600&fit=crop"
            ],
            downloadUrl: "#"
        }
    ];
}

function saveApps(apps) {
    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(apps));
        return true;
    } catch (e) {
        console.error('Error saving apps:', e);
        return false;
    }
}

function getAppsByCategory(category) {
    const apps = getApps();
    if (category === 'all') return apps;
    return apps.filter(app => app.category === category);
}

function addApp(appData) {
    const apps = getApps();
    const newApp = {
        id: Date.now(),
        ...appData,
        downloads: parseInt(appData.downloads) || 0,
        rating: parseFloat(appData.rating) || 0
    };
    apps.push(newApp);
    if (saveApps(apps)) {
        return newApp;
    }
    return null;
}

function updateApp(id, appData) {
    const apps = getApps();
    const index = apps.findIndex(app => app.id === id);
    if (index !== -1) {
        apps[index] = { ...apps[index], ...appData };
        if (saveApps(apps)) {
            return apps[index];
        }
    }
    return null;
}

function deleteApp(id) {
    const apps = getApps();
    const filteredApps = apps.filter(app => app.id !== id);
    if (saveApps(filteredApps)) {
        return true;
    }
    return false;
}

function getStats() {
    const apps = getApps();
    const totalApps = apps.length;
    const totalDownloads = apps.reduce((sum, app) => sum + (app.downloads || 0), 0);
    const avgRating = totalApps > 0 ? (apps.reduce((sum, app) => sum + (parseFloat(app.rating) || 0), 0) / totalApps).toFixed(1) : 0;
    
    return { totalApps, totalDownloads, avgRating };
}

// تهيئة البيانات الأولى إذا لم تكن موجودة
function initializeData() {
    const currentApps = getApps();
    if (currentApps.length === 0) {
        const defaultApps = [
            {
                id: 1,
                name: "سودان نيوز",
                description: "تطبيق متكامل يقدم آخر الأخبار السودانية من مصادر موثوقة. احصل على التحديثات الفورية والأخبار العاجلة في جميع المجالات.",
                category: "أخبار",
                icon: "https://images.unsplash.com/photo-1586339949216-35c2747cc36c?w=200&h=200&fit=crop",
                image: "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=400&h=200&fit=crop",
                version: "2.1.0",
                rating: "4.8",
                downloads: 12543,
                size: "15 MB",
                screenshots: [
                    "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=300&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
                ],
                downloadUrl: "#"
            },
            {
                id: 2, 
                name: "سودان ميوزك",
                description: "أكبر منصة موسيقية سودانية تحتوي على آلاف الأغاني من التراث السوداني والموسيقى المعاصرة.",
                category: "موسيقى",
                icon: "https://images.unsplash.com/photo-1571974599782-87624638275f?w=200&h=200&fit=crop",
                image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=200&fit=crop",
                version: "1.5.2", 
                rating: "4.9",
                downloads: 28764,
                size: "28 MB",
                screenshots: [
                    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=600&fit=crop"
                ],
                downloadUrl: "#"
            }
        ];
        saveApps(defaultApps);
    }
}

// تهيئة البيانات عند تحميل الملف
initializeData();
