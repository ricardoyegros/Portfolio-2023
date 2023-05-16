export default function AboutImage({darkMode, image}){
    return(
        <div
        className={`col-span-3 relative h-max rounded-2xl border-2 shadow-lg shadow-black border-solid ${
          !darkMode ? "border-primary bg-light" : "border-primaryDark bg-dark"
        } p-8 xl:col-span-4 md:order-1 md:col-span-8 `}
      >
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
        <img
          src={image}
          alt="Ricardo Yegros Photo"
          className="w-full h-auto rounded-2xl shadow-lg shadow-black md:max-w-[50vw] lg:max-w-[100vw]"
        />
      </div>
    )
}