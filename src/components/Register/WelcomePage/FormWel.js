"use client"
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';

// Validation schema
const schema = yup.object().shape({
  businessName: yup.string().required('Business name is required'),
  jobRole: yup.string().required('Job role is required'),
  phoneNumber: yup.string().required('Phone number is required'),
});

const MyForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-21xl text-taittle-color">
      <div className="w-[1200px] flex flex-col items-center justify-start gap-[48px] max-w-full mq725:gap-[24px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[48px] max-w-full mq725:gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
            <div className="flex flex-col items-start justify-center gap-[12px]">
              <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit mq450:text-5xl mq450:leading-[34px] mq975:text-13xl mq975:leading-[45px]">
                Welcome
              </h1>
              <div className="relative text-xl leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                Help us Personalise your account
              </div>
            </div>
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-primery-color inline-block min-w-[121px] mq450:text-lgi mq450:leading-[26px]">
              Step 2 of 6
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="self-stretch rounded-2xl bg-background-color overflow-hidden flex flex-col items-center justify-center py-[76px] px-[39px] box-border gap-[32px] max-w-full text-5xl mq725:gap-[16px] mq725:pt-[49px] mq725:pb-[49px] mq725:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                What is your business name?
              </h3>
              <Controller
                name="businessName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`self-stretch h-[72px] rounded-lg bg-white box-border overflow-hidden shrink-0 border-[1.5px] border-solid ${errors.businessName ? 'border-red-500' : 'border-orange'}`}
                    placeholder="Business Name"
                  />
                )}
              />
              {errors.businessName && <p className="text-red-500">{errors.businessName.message}</p>}
            </div>
            
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-px gap-[16px]">
              <h3 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[26px]">
                What is your job role?
              </h3>
              <Controller
                name="jobRole"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`self-stretch h-[68px] rounded-lg bg-white box-border overflow-hidden shrink-0 border-[1.5px] border-solid ${errors.jobRole ? 'border-red-500' : 'border-orange'}`}
                  >
                    <option value=""></option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="other">Other</option>
                  </select>
                )}
              />
              {errors.jobRole && <p className="text-red-500">{errors.jobRole.message}</p>}
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-px box-border gap-[16px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                What is your phone number?
              </h3>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`self-stretch h-[72px] rounded-lg bg-white box-border overflow-hidden shrink-0 border-[1.5px] border-solid ${errors.phoneNumber ? 'border-red-500' : 'border-orange'}`}
                    placeholder="Phone Number"
                  />
                )}
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            </div>
            <div className="flex flex-row items-center justify-center gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
            <button className="cursor-pointer py-[13px] px-14 bg-white rounded-23xl flex flex-row items-center justify-center border-[1px] border-solid border-primery-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
                            <Link href="/register/sign-up">
                                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-primery-color text-left inline-block min-w-[42px]">Back               
                                </div>
                                </Link>
                            </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                <div className="rounded-[26px] bg-primery-color flex flex-row items-center justify-center py-[13px] px-14 gap-[6px] whitespace-nowrap">
                  <div className="relative leading-[24px] inline-block min-w-[44px]">
                    <Link href="/register/sign-up/welcome/services">
                      <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block whitespace-nowrap">Next</div>
                    </Link>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
