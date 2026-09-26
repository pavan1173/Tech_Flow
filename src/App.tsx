import React, { useState } from 'react';
import { useRouter } from './hooks/useRouter';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PreparationSidebar } from './components/PreparationSidebar';
import { PreparationTopBar } from './components/PreparationTopBar';

// Preparation Hub Pages
import { PreparationDashboardPage } from './pages/PreparationDashboardPage';
import { DsaSheetsPage } from './pages/DsaSheetsPage';
import { DsaSheetDetailPage } from './pages/DsaSheetDetailPage';
import { CompanyWiseDsaPage } from './pages/CompanyWiseDsaPage';
import { CompanySheetDetailPage } from './pages/CompanySheetDetailPage';
import { PatternsPage } from './pages/PatternsPage';
import { PackageWisePage } from './pages/PackageWisePage';
import { SqlSheetPage } from './pages/SqlSheetPage';
import { SystemDesignSheetPage } from './pages/SystemDesignSheetPage';
import { PlaylistsPage } from './pages/PlaylistsPage';
import { DbmsPlaylistsPage } from './pages/DbmsPlaylistsPage';
import { OsPlaylistsPage } from './pages/OsPlaylistsPage';
import { OopsPlaylistsPage } from './pages/OopsPlaylistsPage';
import { PlaylistDetailPage } from './pages/PlaylistDetailPage';
import { RoleWisePage } from './pages/RoleWisePage';
import { MostAskedQuestionsPage } from './pages/MostAskedQuestionsPage';
import { HrQuestionsPage } from './pages/HrQuestionsPage';
import { ColdEmailPage } from './pages/ColdEmailPage';
import { NotesPage } from './pages/NotesPage';
import { ResumeTemplatesPage } from './pages/ResumeTemplatesPage';

// Public & Information Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const { currentPath, navigate } = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Helper to determine if current route is part of preparation shell
  const isPrepRoute = currentPath.startsWith('/preparation');

  const renderPrepContent = () => {
    // Individual DSA Sheet: /preparation/dsa-sheets/:slug
    if (currentPath.startsWith('/preparation/dsa-sheets/')) {
      const slug = currentPath.replace('/preparation/dsa-sheets/', '');
      return <DsaSheetDetailPage slug={slug} navigate={navigate} />;
    }

    // Individual Company DSA Sheet: /preparation/company-wise-dsa-sheet/:slug
    if (currentPath.startsWith('/preparation/company-wise-dsa-sheet/')) {
      const slug = currentPath.replace('/preparation/company-wise-dsa-sheet/', '');
      return <CompanySheetDetailPage slug={slug} navigate={navigate} />;
    }

    // Core Subjects Detail Playlists:
    if (currentPath.startsWith('/preparation/dbms-playlists/')) {
      const slug = currentPath.replace('/preparation/dbms-playlists/', '');
      return <PlaylistDetailPage slug={slug} subjectType="dbms" navigate={navigate} />;
    }
    if (currentPath.startsWith('/preparation/os-playlists/')) {
      const slug = currentPath.replace('/preparation/os-playlists/', '');
      return <PlaylistDetailPage slug={slug} subjectType="os" navigate={navigate} />;
    }
    if (currentPath.startsWith('/preparation/oops-playlists/')) {
      const slug = currentPath.replace('/preparation/oops-playlists/', '');
      return <PlaylistDetailPage slug={slug} subjectType="oops" navigate={navigate} />;
    }

    if (currentPath === '/preparation/dsa-sheets') {
      return <DsaSheetsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/company-wise-dsa-sheet') {
      return <CompanyWiseDsaPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/20-essential-dsa-patterns') {
      return <PatternsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/package-wise-dsa-sheet') {
      return <PackageWisePage navigate={navigate} />;
    }
    if (currentPath === '/preparation/sql-sheet') {
      return <SqlSheetPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/system-design-sheet') {
      return <SystemDesignSheetPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/dsa-playlists') {
      return <PlaylistsPage initialTab="dsa" navigate={navigate} />;
    }
    if (currentPath === '/preparation/dbms-playlists') {
      return <DbmsPlaylistsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/os-playlists') {
      return <OsPlaylistsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/oops-playlists') {
      return <OopsPlaylistsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/system-design-playlists') {
      return <PlaylistsPage initialTab="systemDesign" navigate={navigate} />;
    }
    if (currentPath === '/preparation/role-wise') {
      return <RoleWisePage navigate={navigate} />;
    }
    if (currentPath === '/preparation/most-asked-questions') {
      return <MostAskedQuestionsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/hr-questions') {
      return <HrQuestionsPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/cold-email-templets' || currentPath === '/preparation/cold-email-templates') {
      return <ColdEmailPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/notes') {
      return <NotesPage navigate={navigate} />;
    }
    if (currentPath === '/preparation/resume-templates') {
      return <ResumeTemplatesPage navigate={navigate} />;
    }

    return <PreparationDashboardPage navigate={navigate} />;
  };

  const renderContent = () => {
    // Preparation Hub Experience
    if (isPrepRoute) {
      return (
        <div className="flex-1 flex min-w-0 bg-[#0c0c0c]">
          <PreparationSidebar
            currentPath={currentPath}
            navigate={navigate}
            collapsed={sidebarCollapsed}
          />
          <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-[#0a0a0a]">
            <PreparationTopBar
              currentPath={currentPath}
              navigate={navigate}
              toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <main className="flex-1 min-w-0 bg-[#0a0a0a] text-white">
              {renderPrepContent()}
            </main>
          </div>
        </div>
      );
    }

    // Static & Public Pages
    if (currentPath === '/about') {
      return (
        <>
          <Navbar currentPath={currentPath} navigate={navigate} />
          <main className="flex-1">
            <AboutPage navigate={navigate} />
          </main>
          <Footer navigate={navigate} />
        </>
      );
    }
    if (currentPath === '/contact') {
      return (
        <>
          <Navbar currentPath={currentPath} navigate={navigate} />
          <main className="flex-1">
            <ContactPage navigate={navigate} />
          </main>
          <Footer navigate={navigate} />
        </>
      );
    }
    if (currentPath === '/privacy') {
      return (
        <>
          <Navbar currentPath={currentPath} navigate={navigate} />
          <main className="flex-1">
            <LegalPage type="privacy" navigate={navigate} />
          </main>
          <Footer navigate={navigate} />
        </>
      );
    }
    if (currentPath === '/terms') {
      return (
        <>
          <Navbar currentPath={currentPath} navigate={navigate} />
          <main className="flex-1">
            <LegalPage type="terms" navigate={navigate} />
          </main>
          <Footer navigate={navigate} />
        </>
      );
    }

    // Default: Home Landing Page
    return (
      <>
        <Navbar currentPath={currentPath} navigate={navigate} />
        <main className="flex-1">
          <HomePage navigate={navigate} />
        </main>
        <Footer navigate={navigate} />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {renderContent()}
    </div>
  );
}
