import { Link } from 'preact-router/match';
import RespImage from '../respImage';

const navOptions = [
  { name: 'Map', href: '/map' },
  { name: 'Random', href: '/random' },
  { name: 'Table', href: '/table' },
  { name: 'Favorites', href: '/favorites' },
  { name: 'Search', func: 'openSearch' },
];

export default function Hero() {
  return (
    <div className="bg-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784">
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-emerald-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
            <svg
              className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784">
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-emerald-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">The News You Missed</span>
                <span className="block text-emerald-600">2021</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                2021 was a wild year, well, for what little of it we were let
                out of the house. From Insurrections and Riots, to a Spiderman
                Reunion and the loss of Betty White. But we're here to highlight
                news from around the world that passed in the shadows.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1 bg-emerald-900" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <RespImage
              className="relative max-h-[33vh] w-full rounded-lg object-cover shadow-lg"
              src="https://placekitten.com/3000/3000"
              alt="This is a Kitten"
            />
          </div>
        </div>
      </div>
      <div className="bg-emerald-900">
        <more-info className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Here's a few ways to explore
          </h2>
          <nav-options className="mt-8 grid grid-cols-2 gap-4 px-4 text-emerald-100 md:grid-cols-6 lg:grid-cols-5">
            {navOptions.map((option, i, options) => {
              let classList = `hover:bg-emerald-300 hover:text-emerald-800 flex justify-center lg:col-span-1 p-4 rounded-xl bg-emerald-900/0 transition-all duration-300 text-lg uppercase tracking-widest ${
                options.length % 2 && options.length === i + 1
                  ? 'col-span-2 md:col-span-3'
                  : 'col-span-1 md:col-span-2'
              }`;
              return (
                <Link href={option.href} className={classList} key={i}>
                  {option.name}
                </Link>
              );
            })}
          </nav-options>
        </more-info>
      </div>
    </div>
  );
}
