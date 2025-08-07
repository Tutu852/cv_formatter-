# CV Formatter Pro - React Application

A professional CV formatting application built with React.js and Tailwind CSS, featuring AI-powered content enhancement and modern UI components.

## 🚀 Features

- **AI-Powered Enhancement**: Integration with GPT-4, Claude, and Gemini AI models
- **Multi-Format Support**: Upload PDF, DOCX, and Excel files
- **Professional Formatting**: EHS-compliant CV formatting
- **Real-time Editing**: Interactive CV editor with live preview
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Pure CSS Animations**: Smooth transitions without external animation libraries

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd cv-formatter-react
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

## 🎯 Usage

1. **Upload CV**: Drag and drop your CV file (PDF, DOCX, or Excel)
2. **AI Processing**: Watch as AI agents enhance your content
3. **Preview & Edit**: Switch between preview and edit modes
4. **Download**: Export your enhanced CV in multiple formats

## 🎨 Components

### Core Components
- `HomePage`: Main landing page with features showcase
- `FileUpload`: Drag-and-drop file upload component
- `ProcessorPage`: AI processing status and CV management
- `CVPreview`: Professional CV preview with formatting
- `CVEditor`: Interactive CV editing interface

### UI Components
- `Button`: Customizable button component
- `Card`: Container component for content sections
- `Input`: Form input component
- `Textarea`: Multi-line text input
- `Badge`: Tag/label component

## 🎭 Animations

All animations are implemented using pure Tailwind CSS:

- **Hover Effects**: `hover:scale-105`, `hover:shadow-xl`
- **Loading States**: `animate-spin`, `animate-pulse`
- **Transitions**: `transition-all duration-300`
- **Gradient Backgrounds**: `bg-gradient-to-r`

## 📱 Responsive Design

- **Mobile-first**: Designed for mobile devices first
- **Breakpoints**: `sm:`, `md:`, `lg:` responsive utilities
- **Grid Layouts**: Responsive grid systems
- **Flexible Components**: Adaptive component sizing

## 🔧 Development

### Project Structure
\`\`\`
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── HomePage.jsx  # Main landing page
│   ├── FileUpload.jsx
│   ├── ProcessorPage.jsx
│   ├── CVPreview.jsx
│   └── CVEditor.jsx
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # App entry point
└── index.css         # Global styles
\`\`\`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

The application uses Tailwind CSS with custom design tokens:

- **Colors**: Custom color palette with CSS variables
- **Typography**: Responsive text sizing
- **Spacing**: Consistent spacing scale
- **Shadows**: Layered shadow system
- **Borders**: Rounded corners and borders

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Upload dist/ folder to Netlify
\`\`\`

### GitHub Pages
\`\`\`bash
npm run build
# Deploy dist/ folder to gh-pages branch
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- Vite for fast build tooling

---

**Built with ❤️ using React.js and Tailwind CSS**
