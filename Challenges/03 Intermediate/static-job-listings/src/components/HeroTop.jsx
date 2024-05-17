export default function HeroTop() {
  return (
    <div className=" w-screen h-40 lg:h-48 bg-main bg-cover bg-no-repeat bg-center">
      <img
        srcSet="./images/bg-header-mobile.svg 480w, ./images/bg-header-desktop.svg 800w"
        sizes="(max-width: 768px) 480px, 800px"
        src="./images/bg-header-desktop.svg"
        alt=""
        className="object-cover w-full h-full"
      />
    </div>
  );
}
