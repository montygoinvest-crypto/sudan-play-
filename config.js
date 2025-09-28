<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة تحكم Sudan Play</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: rgb(74, 107, 255);
            --secondary: rgb(255, 94, 125);
            --accent: rgb(46, 196, 182);
            --dark: rgb(30, 30, 45);
            --light: rgb(248, 249, 254);
            --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            --gradient-light: linear-gradient(135deg, rgba(74, 107, 255, 0.1) 0%, rgba(255, 94, 125, 0.1) 100%);
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            --shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        body {
            background: var(--light);
            color: var(--dark);
            line-height: 1.6;
            display: flex;
            min-height: 100vh;
        }

        /* الشريط الجانبي */
        .sidebar {
            width: 250px;
            background: var(--dark);
            color: white;
            padding: 2rem 1rem;
            transition: all 0.3s;
            box-shadow: var(--shadow);
        }

        .logo {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo h2 {
            font-size: 1.5rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            list-style: none;
        }

        .nav-links li {
            margin-bottom: 0.5rem;
        }

        .nav-links a {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: white;
            text-decoration: none;
            padding: 1rem;
            border-radius: 10px;
            transition: all 0.3s;
        }

        .nav-links a:hover, .nav-links a.active {
            background: var(--gradient);
        }

        /* المحتوى الرئيسي */
        .main-content {
            flex: 1;
            padding: 2rem;
            overflow-y: auto;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .header h1 {
            font-size: 2rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }

        /* إحصائيات */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: var(--shadow);
            text-align: center;
            transition: all 0.3s;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-hover);
        }

        .stat-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: #666;
            font-size: 0.9rem;
        }

        /* لوحة التحكم */
        .dashboard-section {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow);
        }

        .section-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--gradient-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* نموذج إضافة تطبيق */
        .app-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group.full-width {
            grid-column: 1 / -1;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--dark);
        }

        .form-control {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid #ddd;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s;
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(74, 107, 255, 0.1);
        }

        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }

        .file-upload {
            position: relative;
            overflow: hidden;
            display: inline-block;
            width: 100%;
        }

        .file-upload-btn {
            background: var(--gradient-light);
            color: var(--primary);
            padding: 0.8rem 1.5rem;
            border: 2px dashed var(--primary);
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.3s;
            width: 100%;
        }

        .file-upload-btn:hover {
            background: rgba(74, 107, 255, 0.1);
        }

        .file-upload input[type="file"] {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .preview-image {
            margin-top: 1rem;
            max-width: 100%;
            border-radius: 10px;
            display: none;
        }

        .screenshots-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .screenshot-preview {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .screenshot-preview img {
            width: 100%;
            height: 120px;
            object-fit: cover;
        }

        .remove-screenshot {
            position: absolute;
            top: 5px;
            left: 5px;
            background: rgba(255, 94, 125, 0.8);
            color: white;
            border: none;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.8rem;
        }

        /* الأزرار */
        .btn {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-primary {
            background: var(--gradient);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
        }

        .btn-secondary {
            background: #f8f9fa;
            color: var(--dark);
            border: 1px solid #ddd;
        }

        .btn-secondary:hover {
            background: #e9ecef;
        }

        .form-actions {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            margin-top: 1.5rem;
        }

        /* قائمة التطبيقات */
        .apps-list {
            display: grid;
            gap: 1.5rem;
        }

        .app-item {
            display: flex;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: all 0.3s;
        }

        .app-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-hover);
        }

        .app-image {
            width: 120px;
            height: 120px;
            object-fit: cover;
        }

        .app-details {
            flex: 1;
            padding: 1.5rem;
        }

        .app-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .app-title h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        .app-category {
            background: var(--gradient);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            display: inline-block;
        }

        .app-actions {
            display: flex;
            gap: 0.5rem;
        }

        .action-btn {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 5px;
            transition: all 0.3s;
        }

        .edit-btn {
            color: var(--primary);
        }

        .edit-btn:hover {
            background: rgba(74, 107, 255, 0.1);
        }

        .delete-btn {
            color: var(--secondary);
        }

        .delete-btn:hover {
            background: rgba(255, 94, 125, 0.1);
        }

        .app-description {
            color: #666;
            margin-bottom: 1rem;
            line-height: 1.6;
        }

        .app-meta {
            display: flex;
            gap: 1.5rem;
            color: #888;
            font-size: 0.9rem;
        }

        .app-meta span {
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .app-form {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            body {
                flex-direction: column;
            }
            
            .sidebar {
                width: 100%;
                padding: 1rem;
            }
            
            .nav-links {
                display: flex;
                overflow-x: auto;
                gap: 0.5rem;
            }
            
            .nav-links li {
                margin-bottom: 0;
            }
            
            .nav-links a {
                white-space: nowrap;
            }
            
            .app-item {
                flex-direction: column;
            }
            
            .app-image {
                width: 100%;
                height: 200px;
            }
        }
    </style>
</head>
<body>
    <!-- الشريط الجانبي -->
    <div class="sidebar">
        <div class="logo">
            <h2><i class="fas fa-mobile-alt"></i> Sudan Play</h2>
            <p>لوحة التحكم</p>
        </div>
        <ul class="nav-links">
            <li><a href="#" class="active"><i class="fas fa-tachometer-alt"></i> لوحة التحكم</a></li>
            <li><a href="#"><i class="fas fa-plus-circle"></i> إضافة تطبيق</a></li>
            <li><a href="#"><i class="fas fa-list"></i> إدارة التطبيقات</a></li>
            <li><a href="#"><i class="fas fa-chart-bar"></i> الإحصائيات</a></li>
            <li><a href="#"><i class="fas fa-cog"></i> الإعدادات</a></li>
            <li><a href="#"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a></li>
        </ul>
    </div>

    <!-- المحتوى الرئيسي -->
    <div class="main-content">
        <div class="header">
            <h1>لوحة تحكم Sudan Play</h1>
            <div class="user-info">
                <span>مرحباً، أحمد</span>
                <div class="user-avatar">أ</div>
            </div>
        </div>

        <!-- إحصائيات سريعة -->
        <div class="stats">
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="stat-number" id="totalApps">0</div>
                <div class="stat-label">إجمالي التطبيقات</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-download"></i>
                </div>
                <div class="stat-number" id="totalDownloads">0</div>
                <div class="stat-label">إجمالي التحميلات</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="stat-number" id="avgRating">0</div>
                <div class="stat-label">متوسط التقييم</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="stat-number">58,240</div>
                <div class="stat-label">المستخدمين النشطين</div>
            </div>
        </div>

        <!-- نموذج إضافة تطبيق -->
        <div class="dashboard-section">
            <div class="section-title">
                <span>إضافة تطبيق جديد</span>
            </div>
            <form id="appForm" class="app-form">
                <div class="form-group">
                    <label for="appName">اسم التطبيق</label>
                    <input type="text" id="appName" class="form-control" placeholder="أدخل اسم التطبيق" required>
                </div>
                <div class="form-group">
                    <label for="appCategory">الفئة</label>
                    <select id="appCategory" class="form-control" required>
                        <option value="">اختر الفئة</option>
                        <option value="أخبار">أخبار</option>
                        <option value="موسيقى">موسيقى</option>
                        <option value="تسوق">تسوق</option>
                        <option value="تعليم">تعليم</option>
                        <option value="أدوات">أدوات</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="appVersion">الإصدار</label>
                    <input type="text" id="appVersion" class="form-control" placeholder="مثال: 1.0.0" required>
                </div>
                <div class="form-group">
                    <label for="appSize">الحجم (MB)</label>
                    <input type="number" id="appSize" class="form-control" placeholder="مثال: 25" required>
                </div>
                <div class="form-group">
                    <label for="appRating">التقييم</label>
                    <input type="number" id="appRating" class="form-control" min="0" max="5" step="0.1" placeholder="مثال: 4.5" required>
                </div>
                <div class="form-group">
                    <label for="appDownloads">عدد التحميلات</label>
                    <input type="number" id="appDownloads" class="form-control" placeholder="مثال: 10000" required>
                </div>
                <div class="form-group full-width">
                    <label for="appDescription">وصف التطبيق</label>
                    <textarea id="appDescription" class="form-control" placeholder="أدخل وصفاً مفصلاً للتطبيق" required></textarea>
                </div>
                <div class="form-group">
                    <label>أيقونة التطبيق</label>
                    <div class="file-upload">
                        <button type="button" class="file-upload-btn">
                            <i class="fas fa-upload"></i> اختر صورة الأيقونة
                        </button>
                        <input type="file" id="appIcon" accept="image/*">
                    </div>
                    <img id="iconPreview" class="preview-image" src="" alt="معاينة الأيقونة">
                </div>
                <div class="form-group">
                    <label>صورة الغلاف</label>
                    <div class="file-upload">
                        <button type="button" class="file-upload-btn">
                            <i class="fas fa-upload"></i> اختر صورة الغلاف
                        </button>
                        <input type="file" id="appCover" accept="image/*">
                    </div>
                    <img id="coverPreview" class="preview-image" src="" alt="معاينة الغلاف">
                </div>
                <div class="form-group full-width">
                    <label>لقطات الشاشة</label>
                    <div class="file-upload">
                        <button type="button" class="file-upload-btn">
                            <i class="fas fa-upload"></i> اختر لقطات الشاشة
                        </button>
                        <input type="file" id="appScreenshots" accept="image/*" multiple>
                    </div>
                    <div id="screenshotsPreview" class="screenshots-container"></div>
                </div>
                <div class="form-actions">
                    <button type="reset" class="btn btn-secondary">
                        <i class="fas fa-times"></i> إلغاء
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-save"></i> حفظ التطبيق
                    </button>
                </div>
            </form>
        </div>

        <!-- قائمة التطبيقات -->
        <div class="dashboard-section">
            <div class="section-title">
                <span>التطبيقات المضافة</span>
                <span id="appsCount">0 تطبيق</span>
            </div>
            <div class="apps-list" id="appsList">
                <!-- سيتم ملؤها بالبيانات -->
            </div>
        </div>
    </div>

    <!-- ملف config.js -->
    <script>
        // =============================================
        // ملف التهيئة والإعدادات - config.js
        // =============================================

        // إعدادات التطبيق
        const CONFIG = {
            appName: "Sudan Play Dashboard",
            version: "1.0.0",
            apiUrl: "https://api.sudanplay.com",
            maxFileSize: 5 * 1024 * 1024, // 5MB
            supportedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
            defaultAppIcon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop"
        };

        // فئات التطبيقات المتاحة
        const APP_CATEGORIES = [
            "أخبار",
            "موسيقى", 
            "تسوق",
            "تعليم",
            "أدوات",
            "ترفيه",
            "رياضة",
            "صحة",
            "سفر"
        ];

        // بيانات التطبيقات - سيتم حفظها في localStorage
        let apps = JSON.parse(localStorage.getItem('sudanPlayApps')) || [
            {
                id: 1,
                name: "سودان نيوز",
                description: "تطبيق متكامل يقدم آخر الأخبار السودانية من مصادر موثوقة. احصل على التحديثات الفورية والأخبار العاجلة في جميع المجالات السياسية والاقتصادية والرياضية.",
                category: "أخبار",
                icon: "https://images.unsplash.com/photo-1586339949216-35c2747cc36c?w=200&h=200&fit=crop",
                version: "2.1.0",
                rating: "4.8",
                downloads: 12543,
                size: "15 MB",
                screenshots: [
                    "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=300&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
                ]
            },
            {
                id: 2, 
                name: "سودان ميوزك",
                description: "أكبر منصة موسيقية سودانية تحتوي على آلاف الأغاني من التراث السوداني والموسيقى المعاصرة. استمع وتحميل ومشاركة أفضل الألحان.",
                category: "موسيقى",
                icon: "https://images.unsplash.com/photo-1571974599782-87624638275f?w=200&h=200&fit=crop",
                version: "1.5.2", 
                rating: "4.9",
                downloads: 28764,
                size: "28 MB",
                screenshots: [
                    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=600&fit=crop"
                ]
            }
        ];

        // =============================================
        // وظائف إدارة البيانات
        // =============================================

        // حفظ البيانات في localStorage
        function saveAppsToStorage() {
            localStorage.setItem('sudanPlayApps', JSON.stringify(apps));
            updateStats();
            renderApps();
        }

        // تحديث الإحصائيات
        function updateStats() {
            const totalApps = apps.length;
            const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
            const avgRating = (apps.reduce((sum, app) => sum + parseFloat(app.rating), 0) / totalApps).toFixed(1);

            document.getElementById('totalApps').textContent = totalApps;
            document.getElementById('totalDownloads').textContent = totalDownloads.toLocaleString();
            document.getElementById('avgRating').textContent = avgRating;
            document.getElementById('appsCount').textContent = `${totalApps} تطبيق`;
        }

        // عرض التطبيقات
        function renderApps() {
            const appsList = document.getElementById('appsList');
            
            if (apps.length === 0) {
                appsList.innerHTML = `
                    <div style="text-align: center; padding: 3rem; color: #666;">
                        <i class="fas fa-mobile-alt" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                        <p>لا توجد تطبيقات مضافة حتى الآن</p>
                    </div>
                `;
                return;
            }

            appsList.innerHTML = apps.map(app => `
                <div class="app-item">
                    <img src="${app.icon}" alt="${app.name}" class="app-image" onerror="this.src='${CONFIG.defaultAppIcon}'">
                    <div class="app-details">
                        <div class="app-header">
                            <div class="app-title">
                                <h3>${app.name}</h3>
                                <span class="app-category">${app.category}</span>
                            </div>
                            <div class="app-actions">
                                <button class="action-btn edit-btn" onclick="editApp(${app.id})">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="action-btn delete-btn" onclick="deleteApp(${app.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <p class="app-description">${app.description}</p>
                        <div class="app-meta">
                            <span><i class="fas fa-download"></i> ${app.downloads.toLocaleString()} تحميل</span>
                            <span><i class="fas fa-star"></i> ${app.rating}</span>
                            <span><i class="fas fa-code-branch"></i> ${app.version}</span>
                            <span><i class="fas fa-weight-hanging"></i> ${app.size}</span>
                        </div>
                        ${app.screenshots && app.screenshots.length > 0 ? `
                            <div style="margin-top: 1rem;">
                                <small style="color: #666;">${app.screenshots.length} لقطة شاشة</small>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }

        // =============================================
        // وظائف معالجة النماذج
        // =============================================

        // معالجة رفع الصور
        function setupFileUploads() {
            // أيقونة التطبيق
            document.getElementById('appIcon').addEventListener('change', function(e) {
                handleImageUpload(e, 'iconPreview');
            });

            // صورة الغلاف
            document.getElementById('appCover').addEventListener('change', function(e) {
                handleImageUpload(e, 'coverPreview');
            });

            // لقطات الشاشة
            document.getElementById('appScreenshots').addEventListener('change', function(e) {
                handleScreenshotsUpload(e);
            });
        }

        function handleImageUpload(event, previewId) {
            const file = event.target.files[0];
            if (file) {
                // التحقق من نوع الملف
                if (!CONFIG.supportedImageTypes.includes(file.type)) {
                    alert('نوع الملف غير مدعوم. الرجاء اختيار صورة بصيغة JPEG, PNG, أو WebP.');
                    return;
                }

                // التحقق من حجم الملف
                if (file.size > CONFIG.maxFileSize) {
                    alert('حجم الملف كبير جداً. الحد الأقصى هو 5MB.');
                    return;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById(previewId).src = e.target.result;
                    document.getElementById(previewId).style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        }

        function handleScreenshotsUpload(event) {
            const files = event.target.files;
            const container = document.getElementById('screenshotsPreview');
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                
                if (!CONFIG.supportedImageTypes.includes(file.type)) {
                    alert(`الملف ${file.name} نوعه غير مدعوم.`);
                    continue;
                }

                if (file.size > CONFIG.maxFileSize) {
                    alert(`الملف ${file.name} حجمه كبير جداً.`);
                    continue;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    const screenshotDiv = document.createElement('div');
                    screenshotDiv.className = 'screenshot-preview';
                    screenshotDiv.innerHTML = `
                        <img src="${e.target.result}" alt="لقطة شاشة">
                        <button type="button" class="remove-screenshot" onclick="this.parentElement.remove()">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    container.appendChild(screenshotDiv);
                }
                reader.readAsDataURL(file);
            }
        }

        // =============================================
        // وظائف إدارة التطبيقات
        // =============================================

        // إضافة تطبيق جديد
        function addApp(appData) {
            const newApp = {
                id: Date.now(), // استخدام timestamp كمعرف فريد
                ...appData,
                screenshots: getScreenshotsFromPreview()
            };
            
            apps.push(newApp);
            saveAppsToStorage();
        }

        // الحصول على لقطات الشاشة من المعاينة
        function getScreenshotsFromPreview() {
            const screenshots = [];
            const previews = document.getElementById('screenshotsPreview').querySelectorAll('img');
            previews.forEach(img => {
                screenshots.push(img.src);
            });
            return screenshots;
        }

        // تعديل تطبيق
        function editApp(id) {
            const app = apps.find(a => a.id === id);
            if (app) {
                // ملء النموذج ببيانات التطبيق
                document.getElementById('appName').value = app.name;
                document.getElementById('appCategory').value = app.category;
                document.getElementById('appVersion').value = app.version;
                document.getElementById('appSize').value = parseInt(app.size);
                document.getElementById('appRating').value = app.rating;
                document.getElementById('appDownloads').value = app.downloads;
                document.getElementById('appDescription').value = app.description;
                
                // تمرير إلى أعلى الصفحة
                document.querySelector('.app-form').scrollIntoView({ behavior: 'smooth' });
                
                // تعيين معرف التطبيق للنموذج
                document.getElementById('appForm').dataset.editingId = id;
                
                alert(`ستقوم بتعديل تطبيق: ${app.name}`);
            }
        }

        // حذف تطبيق
        function deleteApp(id) {
            if (confirm('هل أنت متأكد من حذف هذا التطبيق؟')) {
                apps = apps.filter(a => a.id !== id);
                saveAppsToStorage();
                alert('تم حذف التطبيق بنجاح!');
            }
        }

        // =============================================
        // تهيئة التطبيق
        // =============================================

        document.addEventListener('DOMContentLoaded', function() {
            // تهيئة رفع الملفات
            setupFileUploads();
            
            // تحديث الإحصائيات وعرض التطبيقات
            updateStats();
            renderApps();
            
            // معالجة إرسال النموذج
            document.getElementById('appForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // جمع البيانات من النموذج
                const formData = {
                    name: document.getElementById('appName').value,
                    category: document.getElementById('appCategory').value,
                    version: document.getElementById('appVersion').value,
                    size: document.getElementById('appSize').value + ' MB',
                    rating: document.getElementById('appRating').value,
                    downloads: parseInt(document.getElementById('appDownloads').value),
                    description: document.getElementById('appDescription').value,
                    icon: document.getElementById('iconPreview').src || CONFIG.defaultAppIcon
                };
                
                // التحقق من البيانات
                if (!formData.name || !formData.category || !formData.version) {
                    alert('الرجاء ملء جميع الحقول المطلوبة');
                    return;
                }
                
                // التحقق إذا كان تعديلاً أم إضافة جديدة
                const editingId = this.dataset.editingId;
                if (editingId) {
                    // تعديل التطبيق الموجود
                    const index = apps.findIndex(a => a.id == editingId);
                    if (index !== -1) {
                        apps[index] = { ...apps[index], ...formData };
                        delete this.dataset.editingId;
                    }
                } else {
                    // إضافة تطبيق جديد
                    addApp(formData);
                }
                
                // إعادة تعيين النموذج
                this.reset();
                document.getElementById('iconPreview').style.display = 'none';
                document.getElementById('coverPreview').style.display = 'none';
                document.getElementById('screenshotsPreview').innerHTML = '';
                
                // رسالة نجاح
                alert(editingId ? 'تم تعديل التطبيق بنجاح!' : 'تم إضافة التطبيق بنجاح!');
            });
            
            // إعادة تعيين النموذج عند النقر على إلغاء
            document.querySelector('button[type="reset"]').addEventListener('click', function() {
                document.getElementById('appForm').reset();
                document.getElementById('iconPreview').style.display = 'none';
                document.getElementById('coverPreview').style.display = 'none';
                document.getElementById('screenshotsPreview').innerHTML = '';
                delete document.getElementById('appForm').dataset.editingId;
            });
        });
    </script>
</body>
</html>
