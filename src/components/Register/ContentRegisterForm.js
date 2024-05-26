import { useMemo } from "react";
import PropTypes from "prop-types";

const ContentRegisterForm = ({ fieldName, placeholder, field }) => {
  const labelStyle = useMemo(() => ({
    minWidth: "80px",
  }), []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-base text-taittle-color font-manrope">
      <div className="relative leading-[24px] font-medium inline-block min-w-[80px]" style={labelStyle}>
        {fieldName}
      </div>
      <div className="self-stretch rounded-[26px] flex flex-row items-start justify-start py-3.5 px-6 border-[1px] border-solid border-orange-100">
        <input {...field} className="w-[122px] border-none outline-none font-manrope text-base bg-transparent h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0 z-[1]" placeholder={placeholder} />
      </div>
    </div>
  );
};

ContentRegisterForm.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
};

export default ContentRegisterForm;
