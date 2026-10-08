import React from 'react';

export const getPlaylistImage = (type?: string, subject?: string, slug?: string, imageUrl?: string): string => {
  if (imageUrl) return imageUrl;
  const t = (type || '').toLowerCase();
  const s = (subject || '').toUpperCase();
  const sl = (slug || '').toLowerCase();

  // 1. System Design
  if (s.includes('SYSTEM') || sl.includes('system-design') || t.includes('system-design')) {
    if (t.includes('gaurav') || sl.includes('gaurav')) return '/images/playlists/system-design/gaurav_sen.webp';
    if (t.includes('exponent') || sl.includes('exponent')) return '/images/playlists/system-design/exponent.webp';
    if (t.includes('hello') || sl.includes('hello')) return '/images/playlists/system-design/hello_interview.webp';
    if (t.includes('aryan') || sl.includes('aryan')) return '/images/playlists/system-design/code_with_aryan.webp';
    if (t.includes('army') || t.includes('rohit') || sl.includes('coder-army') || sl.includes('rohit')) return '/images/playlists/system-design/rohit_negi.webp';
    if (t.includes('digest') || sl.includes('engineering-digest')) return '/images/playlists/system-design/engineering_digest.webp';
    return '/images/playlists/system-design/gaurav_sen.webp';
  }

  // 2. DBMS
  if (s.includes('DBMS') || sl.includes('dbms') || t.includes('dbms')) {
    if (t.includes('riti') || sl.includes('riti')) return '/images/playlists/dbms/riti_kumari.webp';
    return '/images/playlists/dbms/love_babbar.webp';
  }

  // 3. OS
  if (s.includes('OS') || sl.includes('os') || t.includes('os')) {
    if (t.includes('riti') || sl.includes('riti')) return '/images/playlists/os/riti_kumari.webp';
    if (t.includes('vivek') || sl.includes('vivek')) return '/images/playlists/os/vivek_gupta.webp';
    if (t.includes('neso') || sl.includes('neso')) return '/images/playlists/os/neso_academy.webp';
    return '/images/playlists/os/love_babbar.webp';
  }

  // 4. OOPS
  if (s.includes('OOP') || sl.includes('oop') || t.includes('oop')) {
    if (t.includes('rohit') || sl.includes('rohit')) return '/images/playlists/oops/rohit_negi.webp';
    if (t.includes('kunal') || sl.includes('kunal')) return '/images/playlists/oops/kunal_kushwaha.webp';
    if (t.includes('jenny') || sl.includes('jenny')) return '/images/playlists/oops/jennys.webp';
    return '/images/playlists/oops/code_with_harry.webp';
  }

  // 5. DSA
  if (s.includes('DSA') || sl.includes('dsa') || t.includes('dsa')) {
    if (t.includes('shradha') || sl.includes('shradha')) return '/images/playlists/dsa/shradha_khapra.webp';
    if (t.includes('rohit') || sl.includes('rohit')) return '/images/playlists/dsa/rohit_negi.webp';
    return '/images/playlists/dsa/love_babbar.webp';
  }

  // Direct creator name fallback
  if (t.includes('gaurav')) return '/images/playlists/system-design/gaurav_sen.webp';
  if (t.includes('exponent')) return '/images/playlists/system-design/exponent.webp';
  if (t.includes('hello')) return '/images/playlists/system-design/hello_interview.webp';
  if (t.includes('aryan')) return '/images/playlists/system-design/code_with_aryan.webp';
  if (t.includes('army') || t.includes('rohit')) return '/images/playlists/system-design/rohit_negi.webp';
  if (t.includes('digest')) return '/images/playlists/system-design/engineering_digest.webp';
  if (t.includes('riti')) return '/images/playlists/dbms/riti_kumari.webp';
  if (t.includes('vivek')) return '/images/playlists/os/vivek_gupta.webp';
  if (t.includes('neso')) return '/images/playlists/os/neso_academy.webp';
  if (t.includes('harry')) return '/images/playlists/oops/code_with_harry.webp';
  if (t.includes('kunal')) return '/images/playlists/oops/kunal_kushwaha.webp';
  if (t.includes('jenny')) return '/images/playlists/oops/jennys.webp';
  if (t.includes('shradha')) return '/images/playlists/dsa/shradha_khapra.webp';
  if (t.includes('babbar')) return '/images/playlists/dbms/love_babbar.webp';

  return '/images/playlists/system-design/gaurav_sen.webp';
};

interface PlaylistThumbnailProps {
  type?: string;
  subject?: 'DBMS' | 'OS' | 'OOPS' | 'CN' | 'System Design' | 'DSA' | string;
  slug?: string;
  imageUrl?: string;
  alt?: string;
  className?: string;
}

export const PlaylistThumbnail: React.FC<PlaylistThumbnailProps> = ({
  type,
  subject = 'System Design',
  slug,
  imageUrl,
  alt = 'Playlist Thumbnail',
  className = '',
}) => {
  const imgSrc = getPlaylistImage(type, subject, slug, imageUrl);

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-zinc-950 ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
};
