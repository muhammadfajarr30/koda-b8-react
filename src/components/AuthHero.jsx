import React from "react";

const AuthHero = ({
  image,
  title,
  description,
  stats,
  features,
}) => {
  return (
    <section className="relative hidden lg:flex flex-1 overflow-hidden bg-[#1A73E8]">
      <img
        src={`/images/${image}.png`}
        alt=""
        className="h-screen w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 flex flex-col">
        <div className="absolute top-12 left-12 flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 font-bold">
            B
          </div>
          <span className="text-2xl font-semibold">
            BeliMudah
          </span>
        </div>
        <div className="absolute top-1/3 left-12 max-w-md">
          <h1 className="mb-6 text-4xl font-bold text-white">
            {title}
          </h1>
          {description && (
            <p className="mb-10 text-lg text-white/90">
              {description}
            </p>
          )}
          {stats && stats.length > 0 && (
            <div className="flex gap-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-2xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}
          {features && features.length > 0 && (
            <ul className="space-y-4 text-lg text-white">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-white" />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="absolute bottom-12 left-12 text-sm text-white">
          © 2026 BeliMudah. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </section>
  );
};

export default AuthHero;