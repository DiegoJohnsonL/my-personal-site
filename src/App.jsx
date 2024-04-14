function App() {
  return (
    <div className="max-w-[800px] flex flex-col w-full justify-center mx-auto">
      <header className="my-7 py-7 md:my-10 md:py-10">
        <div className="flex flex-wrap mx-auto max-w-[90%] w-full justify-center md:justify-between gap-4">
          <a className="items-center flex justify-center md:justify-start  w-[300px]" href="/">
            <img
              src="https://ychof.com/static/6f35bcce406a9d991ec13ef368bee8c8/logo.svg"
              alt="logo image for this site"
              className="object-contain"
            />
          </a>
          <div className="flex items-center justify-between gap-3">
              <button className="bg-white border border-[#ccc] rounded-[20px] py-2 px-5 text-sm h-fit hover:border-[#333]">ES</button>
              <button className="bg-[#333] text-white border border-[#333] rounded-[20px] py-2 px-5 text-sm h-fit">
                EN
              </button>
          </div>
        </div>
      </header>
      <main className="md:bg-[#f6f7fb] rounded-[64px] flex flex-col md:flex-row items-center text-center md:items-start md:text-left">
        <div className="max-w-full px-8 md:p-16 md:pb-0">
          <div className="mb-10 font-bold text-lg">
            Diego Johnson <br /> Fullstack, software engineer bachelor / Lima
            Peru
          </div>
          <div className="mb-10 font-bold text-lg">Contact me via</div>

          <div className="flex mb-10 gap-3 justify-center md:justify-normal">
            <a target="_blank" href="https://github.com/DiegoJohnsonL">
              <img
                className="Main-module--social--6ae52"
                src="https://img.shields.io/badge/github-%2324292f.svg?&amp;style=for-the-badge&amp;logo=github&amp;logoColor=white"
                alt="github"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/diegojohnsonl">
              <img
                className="Main-module--social--6ae52"
                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&amp;style=for-the-badge&amp;logo=linkedin&amp;logoColor=white"
                alt="linkedin"
              />
            </a>
            <a href="mailto:diegojohnson46@gmail.com">
              <img
                className="Main-module--social--6ae52"
                src="https://img.shields.io/badge/email-%2324292f?style=for-the-badge&logo=gmail&logoColor=white&color=red"
                alt="linkedin"
              />
            </a>
          </div>
          <div className="flex flex-col mb-10">
            <a href="https://github.com/DiegoJohnsonL/CV/blob/main/resume_es.pdf" target="_blank">
              <button className="text-lg border-2 text-[#999] border-[#aaa] px-9 hover:text-[#1a202c] hover:border-[#000] rounded-[32px] h-12 min-w-[165px]">
                Resume - Espanol
              </button>
            </a>
            <br />
            <a href="https://github.com/DiegoJohnsonL/CV/blob/main/resume_en.pdf" target="_blank">
              <button className="text-lg border-2 text-[#999] border-[#aaa] px-9 hover:text-[#1a202c] hover:border-[#000] rounded-[32px] h-12 min-w-[165px]">
                Resume - English
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden pt-5 md:pt-[100px] w-[280px]">
          <img
            src="/me.jpg"
            alt="Diego Johnson"
            className="size-[140px] max-w-full max-h-full"
          />
        </div>
      </main>
      {/* <BottomMenu /> */}

    </div>
  );
}

export default App;



// function BottomMenu() {
//   return (
//     <div className="fixed bg-[#f6f7fb] bottom-0 md:bottom-2 lg:bottom-2 w-full md:w-auto lg:w-auto py-10 md:py-8 lg:py-6 rounded-none md:rounded-3xl lg:rounded-3xl">
//       <div className="flex justify-center">
//         <MenuItem label="launcher" emojiSrc="https://tiagohermano.dev/_next/image?url=%2Femojis%2Frocket.png&w=1920&q=75" />
//       </div>
//     </div>
//   );
// }

// /* eslint-disable react/prop-types */
// function MenuItem({ label, emojiSrc }) {
//   return (
//     <div className="flex justify-center flex-1">
     
//     </div>
//   );
// }

