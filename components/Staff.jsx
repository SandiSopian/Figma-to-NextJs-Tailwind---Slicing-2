import TitleParagraph from "../components/TitleParagraph";
import TextParapraph from "./TextParapraph";

export default function Staff() {
  return (
    <div className="bg-slate-200 mt-10">
      <div className="container mx-auto flex justify-left">
        <div className="w-7/12">
          <img src="/staff-img.jpg" alt="Staff Sarang Coffee" className="max-w-[80%]" />
        </div>

        <div className="w-3/12 my-auto">
          <TitleParagraph>Staff Professional</TitleParagraph>
          <TextParapraph className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ab dignissimos quaerat in velit, beatae expedita, placeat magnam est hic mollitia corporis perspiciatis doloremque laboriosam laborum esse ipsa consectetur officiis
            nesciunt facilis tempora ad delectus. Magnam dignissimos eum ad enim!
          </TextParapraph>
        </div>
      </div>
    </div>
  );
}
