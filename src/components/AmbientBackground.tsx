export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-ambient-fade-in"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,107,167,0.1),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(4,107,167,0.08),transparent_26%),linear-gradient(180deg,#f6f9fc_0%,#eef3f9_42%,#f5f7fa_100%)]" />
      <div className="absolute inset-0 bg-[size:32px_32px] bg-grid-faint opacity-50" />

      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-imu-highlight/15 blur-3xl [animation:floatY_20s_ease-in-out_infinite]" />
      <div className="absolute right-[-4rem] top-[24rem] h-96 w-96 rounded-full bg-imu-brand/10 blur-3xl [animation:floatY_26s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-16 left-[12%] h-64 w-64 rounded-full bg-imu-200/45 blur-3xl [animation:floatY_24s_ease-in-out_infinite]" />

      <div className="absolute inset-x-0 top-[30vh] h-px bg-gradient-to-r from-transparent via-imu-highlight/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-[18vh] h-px bg-gradient-to-r from-transparent via-imu-brand/15 to-transparent" />
    </div>
  );
}
