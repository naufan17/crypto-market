import React from 'react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm sm:text-base font-sans">
              Data disediakan oleh Indodax
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 543.24 91.08" className="w-auto h-6 sm:h-8">
              <path fill="currentColor" d="M0 2.57h18.58v61.59H0V2.57Zm13.23 5.35H5.35v50.89h7.88V7.92ZM6.62 56.48V10.9H12v45.58ZM92.75 52.61h8.15V8.34h-1.27v43h-6.32l-43.09-43H32.64v50.89h7.88V16.22h6.33l43.09 43.01h17.58V6.38h5.35v58.2h-25.1L45.88 22.6v41.98H27.29V2.99h25.1l41.89 41.97V2.99h11.97v54.97H90.42L47.41 14.95h-8.15v39.67h-5.35V9.6h15.83l43.01 43.01zM180.09 20.54a7.86 7.86 0 0 0-2.08-.21h-38.68v31h42a22.89 22.89 0 0 0 3.31-.19 2.14 2.14 0 0 0 2.09-2.09 21.61 21.61 0 0 0 .19-3.32V19.31a21.68 21.68 0 0 0-.19-3.32 2.7 2.7 0 0 0-.62-1.46 2.73 2.73 0 0 0-1.47-.62 21.56 21.56 0 0 0-3.31-.2h-48.62v49.63h-12V1.75h60.57a37.42 37.42 0 0 1 8.38.77 11.24 11.24 0 0 1 5.53 2.88 11.4 11.4 0 0 1 2.88 5.53 37.37 37.37 0 0 1 .77 8.38v26.46a38.32 38.32 0 0 1-.77 8.42 11.35 11.35 0 0 1-2.88 5.58 11 11 0 0 1-5.55 2.84 39.7 39.7 0 0 1-8.36.73h-44.82V58h44.86a31.85 31.85 0 0 0 6.4-.52 6.16 6.16 0 0 0 5.28-5.3 32 32 0 0 0 .52-6.41V19.31a32 32 0 0 0-.52-6.41 7 7 0 0 0-1.74-3.54 7 7 0 0 0-3.54-1.75 32.06 32.06 0 0 0-6.41-.51H126.1V58h1.26V8.36h54a28.22 28.22 0 0 1 5.19.39 6.75 6.75 0 0 1 3.59 1.77 6.71 6.71 0 0 1 1.77 3.59 28.27 28.27 0 0 1 .39 5.2v26.46a28 28 0 0 1-.39 5.25 6.24 6.24 0 0 1-5.36 5.31 28.16 28.16 0 0 1-5.19.39H134V15h47.34c2.77 0 4.33 1.56 4.33 4.33v26.44c0 2.78-1.56 4.33-4.33 4.33h-38.26v-5.35H178a13.65 13.65 0 0 0 1.69-.07.44.44 0 0 0 .52-.52 13.66 13.66 0 0 0 .08-1.69V22.62a8.3 8.3 0 0 0-.21-2.08ZM351.47 20.54a7.86 7.86 0 0 0-2.08-.21h-38.68v31h42a23 23 0 0 0 3.32-.19 2.64 2.64 0 0 0 1.46-.63 2.67 2.67 0 0 0 .62-1.46 21.61 21.61 0 0 0 .2-3.32V19.31a21.69 21.69 0 0 0-.2-3.32 2.67 2.67 0 0 0-.62-1.46 2.63 2.63 0 0 0-1.46-.62 21.69 21.69 0 0 0-3.32-.2H304.1v49.63h-12V1.75h60.6a37.37 37.37 0 0 1 8.38.77 11.24 11.24 0 0 1 5.53 2.88 11.19 11.19 0 0 1 2.88 5.53 37.37 37.37 0 0 1 .77 8.38v26.46a38.32 38.32 0 0 1-.77 8.42 11.27 11.27 0 0 1-2.88 5.58 11 11 0 0 1-5.54 2.84 39.85 39.85 0 0 1-8.37.73h-44V58h44a32 32 0 0 0 6.41-.52 6.16 6.16 0 0 0 5.29-5.29 32 32 0 0 0 .51-6.41V19.31a32 32 0 0 0-.51-6.41 7.06 7.06 0 0 0-1.75-3.54 7 7 0 0 0-3.54-1.75 32 32 0 0 0-6.41-.51h-55.22V58h1.27V8.36h53.95a28.27 28.27 0 0 1 5.2.39 6.79 6.79 0 0 1 3.59 1.77 6.86 6.86 0 0 1 1.77 3.59 28.27 28.27 0 0 1 .39 5.2v26.46a28 28 0 0 1-.4 5.25 6.22 6.22 0 0 1-5.35 5.31 28.27 28.27 0 0 1-5.2.39h-47.33V15h47.33c2.77 0 4.33 1.56 4.33 4.33v26.44c0 2.78-1.56 4.33-4.33 4.33h-37.39v-5.35h34.08a13.73 13.73 0 0 0 1.7-.07.89.89 0 0 0 .39-.12.93.93 0 0 0 .12-.4 13.73 13.73 0 0 0 .08-1.7V22.62a7.86 7.86 0 0 0-.21-2.08ZM437.49 21.36a8.33 8.33 0 0 0-2.08-.2H399a13.65 13.65 0 0 0-1.69.07 1 1 0 0 0-.4.12 1 1 0 0 0-.12.4 13.65 13.65 0 0 0-.07 1.69v12.22h47.58V20.14a21.61 21.61 0 0 0-.2-3.32 2.53 2.53 0 0 0-.62-1.46 2.61 2.61 0 0 0-1.46-.63 22.94 22.94 0 0 0-3.32-.19h-43a22.94 22.94 0 0 0-3.32.19 2.61 2.61 0 0 0-1.46.63 2.61 2.61 0 0 0-.63 1.46 22.94 22.94 0 0 0-.19 3.32v34.64h-5.35V20.14a28.27 28.27 0 0 1 .39-5.2 6.79 6.79 0 0 1 1.77-3.59 6.74 6.74 0 0 1 3.55-1.77 27.78 27.78 0 0 1 5.24-.39h43a28.27 28.27 0 0 1 5.2.39 6.79 6.79 0 0 1 3.59 1.77 6.79 6.79 0 0 1 1.77 3.59 28.27 28.27 0 0 1 .39 5.2V41h-58.27V20.14c0-2.78 1.55-4.33 4.33-4.33h43c2.77 0 4.33 1.55 4.33 4.33v11.77h-5.35v-8.47a8.33 8.33 0 0 0-.2-2.08Zm6.82 26.26h-47.58v16.54h-18.58v-44a39.73 39.73 0 0 1 .72-8.37 11.15 11.15 0 0 1 2.84-5.55 11.35 11.35 0 0 1 5.58-2.88 38.32 38.32 0 0 1 8.42-.77h43a38 38 0 0 1 8.38.77 11.36 11.36 0 0 1 5.53 2.88 11.27 11.27 0 0 1 2.88 5.54 37.37 37.37 0 0 1 .78 8.38v44h-18.59v-9.92H401v-5.35h42v9.92h7.88V20.14a32 32 0 0 0-.51-6.41 6.86 6.86 0 0 0-1.75-3.54 6.86 6.86 0 0 0-3.54-1.75 32 32 0 0 0-6.41-.52h-43a32 32 0 0 0-6.41.52 6.86 6.86 0 0 0-3.54 1.75 6.86 6.86 0 0 0-1.72 3.54 32 32 0 0 0-.52 6.41v38.67h7.89V42.27h58.28v12.8h-5.35v-7.45ZM535.69 13.1l-5.59-5.58-22 21.91h-21.76l-13.09-13.1 3.75-3.75 11.67 11.5H506L530.1 0l13.09 13.1-25 25 12.41 12.41-3.76 3.76L510.71 38l25-24.9Zm-49.82 17.59h5.34l-22.93 22.94 5.58 5.59 21.91-21.91h12.34l22 21.91 5.59-5.59-12.32-12.22 3.73-3.87 16.13 16.1-13.14 13.09L506 42.66h-8.09l-24.05 24.07-13.1-13.1L481 33.37 460.76 13.1 473.86 0l16.92 16.92-3.86 3.74-13.06-13.14-5.58 5.58 17.59 17.59Zm9.26 5.31-18.21 18.33-3.76-3.76L493 30.69h15.63l18.21-18.12 3.75 3.76L511 36ZM278.46 45.16l.45-22.02-15.73-15.71-36.25-.04-14.83 15.26v22.23l14.68 13.69 35.02-.59 9.87-15.77.23-16.17-11.61-11.62-30.43-.03-10.78 11.65.65 16.27 10.29 9.29 27.55-.23 7.32-11.02v-11.4l-7.51-7.51-24.6-.03-6.36 7.5.34 10.56 6.18 5.8 20.91-.21-.13 4.99-23.04.2-9.25-8.5-.64-15.04 9.58-10.91 29.32.04 10.81 10.8v15.13l-9.61 15.15-33.36.08-13.59-12.39-.48-20.82 14.02-15 35.13.03 14.9 14.91V44.7l-12.84 18.96-40.16.52-18.01-16.95v-26.9l18.1-18.56 40.92.04 19 19.01-.48 26.44-8.87 13.64-4.78-3.28 8.07-12.46z"></path> 
              <path fill="currentColor" d="M9.29 8.56a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM9.29 51a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM36.58 51.39A3.6 3.6 0 1 1 33 55a3.6 3.6 0 0 1 3.6-3.6ZM110.19 3.18a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM143.57 43.83a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6Z"></path> 
              <path fill="currentColor" d="M3.44 77.94v12.85H.62V77.94ZM12.41 77.94l5.36 8.62v-8.62h2.64v12.85h-2.78l-5.35-8.6v8.6H9.6V77.94ZM32.15 77.94a6.67 6.67 0 0 1 2.31.39 5 5 0 0 1 1.86 1.19 5.48 5.48 0 0 1 1.22 2 7.86 7.86 0 0 1 .46 2.77 8.86 8.86 0 0 1-.36 2.59 5.65 5.65 0 0 1-1.09 2.06 5.12 5.12 0 0 1-1.81 1.35 6.17 6.17 0 0 1-2.57.5h-5.56V77.94ZM32 88.41a3.42 3.42 0 0 0 1.19-.2 2.69 2.69 0 0 0 1-.65 3.37 3.37 0 0 0 .72-1.2 5.25 5.25 0 0 0 .27-1.8 7.75 7.75 0 0 0-.18-1.75 3.57 3.57 0 0 0-.62-1.35 2.78 2.78 0 0 0-1.15-.85 4.5 4.5 0 0 0-1.75-.3h-2v8.1ZM43.49 81.74a6.55 6.55 0 0 1 1.24-2.15 5.79 5.79 0 0 1 2-1.44 7.06 7.06 0 0 1 5.32 0 5.75 5.75 0 0 1 2 1.44 6.38 6.38 0 0 1 1.24 2.15 8.06 8.06 0 0 1 .44 2.68 7.75 7.75 0 0 1-.47 2.58A6.1 6.1 0 0 1 54 89.15a5.68 5.68 0 0 1-2 1.41 7.06 7.06 0 0 1-5.32 0 5.72 5.72 0 0 1-2-1.41A6.26 6.26 0 0 1 43.49 87a7.74 7.74 0 0 1-.43-2.62 8.05 8.05 0 0 1 .43-2.64ZM46.07 86a4.3 4.3 0 0 0 .61 1.38 3 3 0 0 0 1.08 1 3.23 3.23 0 0 0 1.62.37 3.29 3.29 0 0 0 1.62-.4 3.18 3.18 0 0 0 1.08-1 4.29 4.29 0 0 0 .6-1.38 6.31 6.31 0 0 0 .19-1.57 6.82 6.82 0 0 0-.19-1.64 4.26 4.26 0 0 0-.6-1.41 3 3 0 0 0-1.08-1 3.29 3.29 0 0 0-1.62-.35 3.23 3.23 0 0 0-1.62.37 2.86 2.86 0 0 0-1.08 1 4.28 4.28 0 0 0-.61 1.41 7.36 7.36 0 0 0-.18 1.64 6.81 6.81 0 0 0 .18 1.58ZM64.1 77.94l5.37 8.62v-8.62h2.65v12.85h-2.8L64 82.19v8.6h-2.71V77.94ZM87.92 77.94v2.37h-6.79v2.76h6.23v2.19h-6.23v3.15h6.93v2.38H78.3V77.94ZM95.8 87.62a2.1 2.1 0 0 0 .62.73 2.61 2.61 0 0 0 .91.41 4.32 4.32 0 0 0 1.08.14 6 6 0 0 0 .81-.06 3.06 3.06 0 0 0 .81-.25 1.79 1.79 0 0 0 .63-.49 1.23 1.23 0 0 0 .25-.8 1.15 1.15 0 0 0-.33-.85 2.64 2.64 0 0 0-.87-.54 9.48 9.48 0 0 0-1.23-.38c-.45-.1-.92-.22-1.38-.36a11.51 11.51 0 0 1-1.41-.44 5 5 0 0 1-1.22-.67 3.3 3.3 0 0 1-.88-1 3.14 3.14 0 0 1-.33-1.5 3.4 3.4 0 0 1 .42-1.72 3.9 3.9 0 0 1 1.11-1.21 4.59 4.59 0 0 1 1.55-.72 6.45 6.45 0 0 1 1.73-.24 8.16 8.16 0 0 1 1.93.23 4.75 4.75 0 0 1 1.65.73 3.6 3.6 0 0 1 1.14 1.28 4 4 0 0 1 .43 1.9h-2.74a2.32 2.32 0 0 0-.24-1 1.67 1.67 0 0 0-.55-.6 2.41 2.41 0 0 0-.79-.3 4.75 4.75 0 0 0-1-.09 3.14 3.14 0 0 0-.68.07 1.8 1.8 0 0 0-.62.25 1.52 1.52 0 0 0-.46.45 1.41 1.41 0 0 0 0 1.3 1.36 1.36 0 0 0 .57.43 8.14 8.14 0 0 0 1.17.4l2 .5c.24 0 .57.13 1 .26a5 5 0 0 1 1.27.6 4 4 0 0 1 1.09 1.11 3.18 3.18 0 0 1 .46 1.77 4 4 0 0 1-.34 1.64 3.59 3.59 0 0 1-1 1.31 4.91 4.91 0 0 1-1.68.85 7.64 7.64 0 0 1-2.31.31 8.31 8.31 0 0 1-2.06-.26 5.28 5.28 0 0 1-1.83-.81 4.09 4.09 0 0 1-1.22-1.42 4.29 4.29 0 0 1-.43-2.06h2.74a2.3 2.3 0 0 0 .23 1.1ZM111.82 77.94v12.85H109V77.94ZM124.38 77.94l4.81 12.85h-2.93l-1-2.86h-4.8l-1 2.86h-2.84l4.85-12.85Zm.17 7.88-1.62-4.71-1.67 4.71ZM148.7 77.94a8 8 0 0 1 1.68.16 3.58 3.58 0 0 1 1.29.53 2.5 2.5 0 0 1 .84 1 3.41 3.41 0 0 1 .3 1.51 2.76 2.76 0 0 1-.45 1.62 3.12 3.12 0 0 1-1.3 1.07 3 3 0 0 1 1.77 1.17 3.92 3.92 0 0 1 .21 3.75 3.26 3.26 0 0 1-1 1.16 4.33 4.33 0 0 1-1.46.66 6.25 6.25 0 0 1-1.68.22h-6.23V77.94Zm-.36 5.2a2 2 0 0 0 1.24-.36 1.35 1.35 0 0 0 .49-1.17 1.48 1.48 0 0 0-.16-.74 1.24 1.24 0 0 0-.43-.45 1.74 1.74 0 0 0-.63-.22 3.38 3.38 0 0 0-.72-.07h-2.65v3Zm.16 5.45a3.5 3.5 0 0 0 .8-.08 1.77 1.77 0 0 0 .66-.27 1.34 1.34 0 0 0 .46-.51 1.83 1.83 0 0 0 .17-.83 1.66 1.66 0 0 0-.56-1.41 2.37 2.37 0 0 0-1.47-.42h-3.08v3.52ZM161.82 77.94v12.85H159V77.94ZM167 80.31v-2.37h10.5v2.37h-3.85v10.48h-2.83V80.31ZM190.89 81.37a2.5 2.5 0 0 0-.63-.71 2.64 2.64 0 0 0-.85-.48 2.8 2.8 0 0 0-1-.17 3.23 3.23 0 0 0-1.62.37 2.94 2.94 0 0 0-1.08 1 4.06 4.06 0 0 0-.6 1.41 6.82 6.82 0 0 0-.19 1.64 6.31 6.31 0 0 0 .19 1.57 4.08 4.08 0 0 0 .6 1.38 3.09 3.09 0 0 0 1.08 1 3.23 3.23 0 0 0 1.62.37 2.59 2.59 0 0 0 2-.79 3.61 3.61 0 0 0 .89-2.09h2.74a6.54 6.54 0 0 1-.54 2.13 5.12 5.12 0 0 1-2.91 2.7 6.35 6.35 0 0 1-2.18.36 6.51 6.51 0 0 1-2.66-.52 5.68 5.68 0 0 1-2-1.41 6.28 6.28 0 0 1-1.23-2.13 7.74 7.74 0 0 1-.43-2.62 8.05 8.05 0 0 1 .43-2.68 6.57 6.57 0 0 1 1.25-2.15 5.75 5.75 0 0 1 2-1.44 6.68 6.68 0 0 1 2.66-.52 6.31 6.31 0 0 1 2 .31 5.36 5.36 0 0 1 1.69.89 4.68 4.68 0 0 1 1.23 1.45 5.11 5.11 0 0 1 .61 2h-2.73a2.28 2.28 0 0 0-.34-.87ZM199.53 81.74a6.55 6.55 0 0 1 1.24-2.15 5.79 5.79 0 0 1 2-1.44 7.06 7.06 0 0 1 5.32 0 5.75 5.75 0 0 1 2 1.44 6.57 6.57 0 0 1 1.25 2.15 8.32 8.32 0 0 1 .43 2.68 8 8 0 0 1-.43 2.62 6.28 6.28 0 0 1-1.25 2.11 5.68 5.68 0 0 1-2 1.41 7.06 7.06 0 0 1-5.32 0 5.72 5.72 0 0 1-2-1.41 6.26 6.26 0 0 1-1.24-2.15 7.74 7.74 0 0 1-.43-2.62 8.05 8.05 0 0 1 .43-2.64Zm2.59 4.26a4.08 4.08 0 0 0 .6 1.38 3 3 0 0 0 1.08 1 3.23 3.23 0 0 0 1.62.37 3.29 3.29 0 0 0 1.62-.37 3.18 3.18 0 0 0 1.08-1 4.29 4.29 0 0 0 .6-1.38 6.31 6.31 0 0 0 .19-1.57 6.82 6.82 0 0 0-.19-1.64 4.26 4.26 0 0 0-.6-1.41 3 3 0 0 0-1.08-1 3.29 3.29 0 0 0-1.62-.37 3.23 3.23 0 0 0-1.62.37 2.86 2.86 0 0 0-1.08 1 4.06 4.06 0 0 0-.6 1.41 6.82 6.82 0 0 0-.19 1.64 6.31 6.31 0 0 0 .19 1.57ZM220.16 77.94v12.85h-2.82V77.94ZM229.12 77.94l5.37 8.62v-8.62h2.65v12.85h-2.82l-5.32-8.6v8.6h-2.64V77.94ZM258.41 77.94l4.81 12.85h-2.94l-1-2.86h-4.8l-1 2.86h-2.85l4.86-12.85Zm.16 7.88L257 81.11l-1.68 4.71ZM270.81 77.94l5.37 8.62v-8.62h2.65v12.85H276l-5.34-8.6v8.6H268V77.94ZM290.56 77.94a6.67 6.67 0 0 1 2.31.39 5.12 5.12 0 0 1 1.86 1.19 5.48 5.48 0 0 1 1.22 2 8.09 8.09 0 0 1 .44 2.79 8.86 8.86 0 0 1-.36 2.59 5.65 5.65 0 0 1-1.09 2.06 5.07 5.07 0 0 1-1.82 1.35 6.12 6.12 0 0 1-2.56.5H285V77.94Zm-.2 10.47a3.46 3.46 0 0 0 1.19-.2 2.65 2.65 0 0 0 1-.65 3.37 3.37 0 0 0 .72-1.2 5 5 0 0 0 .27-1.8 7.78 7.78 0 0 0-.18-1.75 3.58 3.58 0 0 0-.63-1.35 2.68 2.68 0 0 0-1.14-.85 4.5 4.5 0 0 0-1.75-.3h-2v8.1ZM318.94 81.37a2.5 2.5 0 0 0-.63-.71 2.64 2.64 0 0 0-.85-.48 2.8 2.8 0 0 0-1-.17 3.23 3.23 0 0 0-1.62.37 3 3 0 0 0-1.08 1 4.06 4.06 0 0 0-.6 1.41 6.82 6.82 0 0 0-.19 1.64 6.31 6.31 0 0 0 .19 1.57 4.08 4.08 0 0 0 .6 1.38 3.18 3.18 0 0 0 1.08 1 3.23 3.23 0 0 0 1.62.37 2.63 2.63 0 0 0 2-.79 3.74 3.74 0 0 0 .89-2.09h2.73a6.78 6.78 0 0 1-.55 2.18 5.29 5.29 0 0 1-1.19 1.65 5.09 5.09 0 0 1-1.73 1 6.35 6.35 0 0 1-2.18.36 6.43 6.43 0 0 1-2.65-.52 5.62 5.62 0 0 1-2-1.41 6.28 6.28 0 0 1-1.21-2.13 8 8 0 0 1-.43-2.62 8.32 8.32 0 0 1 .43-2.68 6.57 6.57 0 0 1 1.25-2.15 5.7 5.7 0 0 1 2-1.44 6.59 6.59 0 0 1 2.65-.52 6.31 6.31 0 0 1 2 .31 5.36 5.36 0 0 1 1.69.89 4.68 4.68 0 0 1 1.23 1.45 5 5 0 0 1 .61 2h-2.73a2.28 2.28 0 0 0-.33-.87ZM334.64 77.94a4.05 4.05 0 0 1 1.56.28 3.57 3.57 0 0 1 1.19.76 3.29 3.29 0 0 1 .75 1.13 3.63 3.63 0 0 1 .26 1.37 3.92 3.92 0 0 1-.47 2 3 3 0 0 1-1.56 1.27 2.19 2.19 0 0 1 .86.44 2.37 2.37 0 0 1 .56.7 3.55 3.55 0 0 1 .32.9 7.8 7.8 0 0 1 .13 1v.72c0 .28 0 .56.06.84a6.67 6.67 0 0 0 .14.82 2 2 0 0 0 .3.66H336a5 5 0 0 1-.28-1.46c0-.56-.09-1.1-.17-1.62a2.57 2.57 0 0 0-.61-1.48 2.11 2.11 0 0 0-1.53-.46h-2.82v5h-2.83V77.94Zm-1 5.81a2.12 2.12 0 0 0 1.46-.43 1.81 1.81 0 0 0 .49-1.4 1.72 1.72 0 0 0-.49-1.36 2.12 2.12 0 0 0-1.46-.43h-3.09v3.62ZM342.33 77.94h3.16l3 5.07 3-5.07h3.15l-4.77 7.92v4.93H347v-5ZM365.19 77.94a5.27 5.27 0 0 1 2.05.35 3.8 3.8 0 0 1 1.37.92 3.55 3.55 0 0 1 .78 1.32 5 5 0 0 1 0 3 3.4 3.4 0 0 1-.78 1.32 3.69 3.69 0 0 1-1.37.93 5.46 5.46 0 0 1-2.05.35h-3v4.61h-2.83v-12.8Zm-.78 6a5.69 5.69 0 0 0 .94-.07 2 2 0 0 0 .79-.28 1.47 1.47 0 0 0 .55-.58 2.44 2.44 0 0 0 0-2 1.57 1.57 0 0 0-.55-.59 2.17 2.17 0 0 0-.79-.27 5.67 5.67 0 0 0-.94-.08h-2.19V84ZM374.06 80.31v-2.37h10.53v2.37h-3.85v10.48h-2.83V80.31ZM389.61 81.74a6.55 6.55 0 0 1 1.24-2.15 5.79 5.79 0 0 1 2-1.44 7.06 7.06 0 0 1 5.32 0 5.75 5.75 0 0 1 2 1.44 6.38 6.38 0 0 1 1.24 2.15 8.06 8.06 0 0 1 .44 2.68 7.75 7.75 0 0 1-.44 2.62 6.1 6.1 0 0 1-1.24 2.11 5.68 5.68 0 0 1-2 1.41 7.06 7.06 0 0 1-5.32 0 5.72 5.72 0 0 1-2-1.41 6.26 6.26 0 0 1-1.24-2.15 7.74 7.74 0 0 1-.43-2.62 8.05 8.05 0 0 1 .43-2.64ZM392.2 86a4.08 4.08 0 0 0 .6 1.38 3 3 0 0 0 1.08 1 3.23 3.23 0 0 0 1.62.37 3.29 3.29 0 0 0 1.62-.37 3.18 3.18 0 0 0 1.08-1 4.29 4.29 0 0 0 .6-1.38 6.31 6.31 0 0 0 .19-1.57 6.82 6.82 0 0 0-.19-1.64 4.26 4.26 0 0 0-.6-1.41 3 3 0 0 0-1.08-1 3.29 3.29 0 0 0-1.62-.38 3.23 3.23 0 0 0-1.62.37 2.86 2.86 0 0 0-1.08 1 4.06 4.06 0 0 0-.6 1.41 6.82 6.82 0 0 0-.19 1.64 6.31 6.31 0 0 0 .19 1.58ZM425.7 77.94v2.37h-6.78v2.76h6.22v2.19h-6.22v3.15h6.93v2.38h-9.76V77.94ZM430.44 77.94h3.27l2.52 4.1 2.61-4.1h3.1l-4.12 6.14 4.48 6.71h-3.37l-2.81-4.45-2.86 4.45h-3.17l4.49-6.73ZM455.35 81.37a2.85 2.85 0 0 0-.63-.71 2.69 2.69 0 0 0-.86-.48 2.77 2.77 0 0 0-1-.17 3.29 3.29 0 0 0-1.62.37 3 3 0 0 0-1.08 1 4.48 4.48 0 0 0-.6 1.41 6.82 6.82 0 0 0-.19 1.64 6.31 6.31 0 0 0 .19 1.57 4.52 4.52 0 0 0 .6 1.38 3.18 3.18 0 0 0 1.08 1 3.29 3.29 0 0 0 1.62.37 2.62 2.62 0 0 0 2-.79 3.67 3.67 0 0 0 .89-2.09h2.74A6.78 6.78 0 0 1 458 88a5.14 5.14 0 0 1-1.19 1.65 5 5 0 0 1-1.73 1 6.31 6.31 0 0 1-2.18.36 6.43 6.43 0 0 1-2.65-.52 5.62 5.62 0 0 1-2-1.41A6.26 6.26 0 0 1 447 87a7.74 7.74 0 0 1-.43-2.62 8.05 8.05 0 0 1 .43-2.68 6.55 6.55 0 0 1 1.24-2.15 5.7 5.7 0 0 1 2-1.44 6.59 6.59 0 0 1 2.65-.52 6.31 6.31 0 0 1 2 .31 5.36 5.36 0 0 1 1.69.89 4.85 4.85 0 0 1 1.24 1.45 5.29 5.29 0 0 1 .61 2h-2.74a2.26 2.26 0 0 0-.34-.87ZM466.94 77.94v4.93h5.2v-4.93H475v12.85h-2.83v-5.54h-5.2v5.54h-2.83V77.94ZM487.53 77.94l4.81 12.85h-2.94l-1-2.86h-4.8l-1 2.86h-2.85l4.86-12.85Zm.16 7.88-1.62-4.71-1.68 4.71ZM499.93 77.94l5.37 8.62v-8.62h2.7v12.85h-2.83l-5.34-8.6v8.6h-2.64V77.94ZM521.75 90.69a4.69 4.69 0 0 1-1.85.39 6.48 6.48 0 0 1-2.66-.52 5.62 5.62 0 0 1-2-1.41A6.26 6.26 0 0 1 514 87a7.74 7.74 0 0 1-.43-2.62 8.05 8.05 0 0 1 .43-2.68 6.55 6.55 0 0 1 1.24-2.15 5.7 5.7 0 0 1 2-1.44 6.64 6.64 0 0 1 2.66-.52 6.15 6.15 0 0 1 1.91.3 5.59 5.59 0 0 1 1.68.87 5 5 0 0 1 1.23 1.42 4.89 4.89 0 0 1 .59 2h-2.7a2.66 2.66 0 0 0-1-1.62 2.82 2.82 0 0 0-1.71-.56 3.23 3.23 0 0 0-1.62.37 2.86 2.86 0 0 0-1.08 1 4.28 4.28 0 0 0-.61 1.41 7.36 7.36 0 0 0-.19 1.64 6.82 6.82 0 0 0 .19 1.57 4.3 4.3 0 0 0 .61 1.38 3 3 0 0 0 1.08 1 3.23 3.23 0 0 0 1.62.37 3.07 3.07 0 0 0 2.16-.71A3.13 3.13 0 0 0 523 86h-2.85v-2.16h5.4v7h-1.8l-.29-1.46a4.21 4.21 0 0 1-1.71 1.31ZM541.08 77.94v2.37h-6.78v2.76h6.22v2.19h-6.22v3.15h6.93v2.38h-9.76V77.94Z"></path> 
              <path fill="currentColor" d="M137 57.06a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM255 43.75a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM272.6 56.06a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM315 43.83a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM308.33 57.06a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM440.37 27.82a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM387.44 51a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM401 48a3.6 3.6 0 1 1-3.6 3.6A3.6 3.6 0 0 1 401 48ZM447 51a3.6 3.6 0 1 1-3.6 3.6A3.6 3.6 0 0 1 447 51ZM473.86 9.36a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM489.91 16.39a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM524 34.79a3.6 3.6 0 1 1-3.59 3.6 3.6 3.6 0 0 1 3.59-3.6ZM529.86 9.65a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM529.89 49.86a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6ZM473.88 49.84a3.6 3.6 0 1 1-3.6 3.6 3.6 3.6 0 0 1 3.6-3.6Z"></path>
            </svg>
          </div>
          <div className="flex justify-center place-items-end">
            <p className='text-sm sm:text-base text-slate-800'>
              Copyright &copy; { currentYear }  Muhammad Naufan Athoillah
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;