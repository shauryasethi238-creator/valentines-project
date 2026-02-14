# 📸 Images Folder

## How to Add Your Photo

To display your couple photo on the celebration page:

1. **Choose a photo** - Select a beautiful photo of you and Anika together
2. **Rename it** to `couple-photo.jpg` (or keep the original name and update the HTML)
3. **Place it here** in the `static/images/` folder

### Supported Formats
- JPG/JPEG (recommended)
- PNG
- WebP

### Recommended Image Specifications
- **Aspect Ratio**: 4:3 or 16:9 works best
- **Resolution**: 1200x900 pixels or higher for best quality
- **File Size**: Keep under 2MB for faster loading
- **Orientation**: Landscape or portrait both work

### If Using a Different Filename

If your photo has a different name (e.g., `our-photo.png`), update line 36 in `templates/celebration.html`:

```html
<img src="{{ url_for('static', filename='images/your-photo-name.png') }}" alt="Our Special Moment" class="couple-photo">
```

### No Photo Yet?

The app will work fine without a photo - just remove or comment out the photo section in `templates/celebration.html` if you don't want to include one yet.

---

**Tip**: Choose a photo that captures a special moment between you two! 💕