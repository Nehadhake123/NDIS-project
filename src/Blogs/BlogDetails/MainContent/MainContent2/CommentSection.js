import ActionButtons from "./ActionButtons";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  return (
    <section className="w-[1032px] flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-13xl text-title-color font-manrope mq450:pb-[34px] mq450:box-border mq975:pb-[52px] mq975:box-border">
      <div className="w-[792px] flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
        <ActionButtons />
        <div className="self-stretch shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-center py-10 px-6 box-border max-w-full mq725:pt-[26px] mq725:pb-[26px] mq725:box-border">
          <CommentForm />
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
