const NewFeatures = ({ title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] text-white hover:text-black hover:bg-gray-200 rounded-lg px-4">
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px]">
      Title {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
