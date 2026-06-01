npm run lint
```

## 🧩 Updating Content

### Add a New Project

Edit:

```txt
src/components/ProjectSection.jsx
```

Add a new object inside the `projects` array:

```js
{
  id: 6,
  title: "Project Name",
  description: "Short project description.",
  image: projectImage,
  tags: ["React.js", "API", "Dashboard"],
  demoUrl: "https://example.com",
  githubUrl: "https://github.com/username/repo",
}
```

### Add a New Skill

Edit:

```txt
src/components/SkillsSection.jsx
```

Add a skill object:

```js
{ name: "New Tech", image: "/skills/new-tech.svg", category: "frameworks" }
```

Supported categories:

- `languages`
- `webdev`
- `frameworks`
- `databases`
- `tools`

### Replace the Profile Picture

Replace this file:

```txt
src/assets/profilePicture.jpeg
```

The navbar and hero image will update automatically.

## 🎨 Design Notes

The visual style is based on neo-brutalism:

- Heavy black borders
- Bright accent colors
- Strong shadows
- Large uppercase typography
- Motion that feels energetic but not overwhelming

The main theme tokens are defined in:

```txt
src/index.css
```

Key colors:

- `neo-main`: coral red
- `neo-accent`: teal
- `neo-yellow`: yellow
- `neo-bg`: soft gray
- `neo-dark`: near black

## 🌐 Deployment

This project is ready for deployment on platforms like Vercel, Netlify, GitHub Pages, or any static hosting provider that supports Vite builds.

For Vercel:

1. Import the GitHub repository.
2. Use the default Vite settings.
3. Build command: `npm run build`
4. Output directory: `dist`

## 🧹 Maintenance Notes

- Keep project screenshots compressed so the homepage stays fast.
- Prefer adding skill icons to `public/skills` and referencing them with absolute public paths.
- Keep project IDs unique in `ProjectSection.jsx`.
- If a project does not have a demo yet, use `demoUrl: "#"` and mark it clearly as under construction.
- Keep contact form keys and third-party service configuration reviewed before production use.

## 📬 Contact

- GitHub: [rishabhdev0](https://github.com/rishabhdev0)
- LinkedIn: [Rishabh Pandey](https://www.linkedin.com/in/rishabh-pandey-254a08285/)
- X / Twitter: [@Rishabh58750540](https://x.com/Rishabh58750540)
- Email: [rishabh52003@gmail.com](mailto:rishabh52003@gmail.com)
- LeetCode: [rishabh_code](https://leetcode.com/u/rishabh_code/)
- Codeforces: [rishabh_code](https://codeforces.com/profile/rishabh_code)

## ⭐ Repository

If you like the project structure or design direction, feel free to star the repo:

[github.com/rishabhdev0/Portfolio](https://github.com/rishabhdev0/Portfolio)

---

Built and maintained by **Rishabh Pandey**.
