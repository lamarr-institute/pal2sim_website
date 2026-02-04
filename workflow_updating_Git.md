# Workflow: Änderungen auf die Website bringen

## Einfacher Workflow (6 Schritte)

### 1. Änderungen im Code machen
Bearbeite deine Dateien (z.B. `src/app/page.tsx`)

### 2. Build erstellen
```bash
npm run build
```

### 3. Zu gh-pages Branch wechseln
```bash
git checkout gh-pages
```

### 4. Build-Dateien kopieren
```bash
rm -rf _next 404 *.html *.txt *.svg *.png *.JPG *.ico 2>/dev/null
cp -r out/* .
rm -rf out node_modules next-env.d.ts .next
```

### 5. Committen und pushen
```bash
git add -A
git commit -m "Update website"
git push origin gh-pages
```

### 6. Zurück zum Arbeitsbranch
```bash
git checkout website_tab_structure
```

---

## Wichtige Hinweise

- **GitHub Pages aktualisiert sich automatisch** nach dem Push (dauert 1-2 Minuten)
- Die Live-Website ist unter **www.pal2sim.de** erreichbar
- Der `gh-pages` Branch enthält nur die **gebauten Dateien** (HTML, CSS, JS)
- Dein Code-Branch (`website_tab_structure` oder `main`) enthält den **Source Code**

---

## Optional: Source Code auch auf main pushen

Wenn du deine Änderungen auch im Source Code versionieren möchtest:

```bash
git checkout website_tab_structure
git add .
git commit -m "Beschreibung der Änderungen"
git push origin website_tab_structure
```
