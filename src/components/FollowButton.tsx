"use client";

export default function FollowButton() {
  return (
    <button
      className="self-start md:self-auto px-6 py-2.5 border rounded-full text-sm font-semibold font-sans transition-all hover:text-black"
      style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--gold)';
        (e.currentTarget as HTMLButtonElement).style.color = '#000';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--gold)';
      }}
    >
      + Suivre ce créateur
    </button>
  );
}
