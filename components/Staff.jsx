import TitleParagraph from "../components/TitleParagraph";
import TextParagraph from "./TextParagraph";

export default function Staff() {
  return (
    <div className="bg-slate-200 py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-left px-8 md:px-0">
        <div className="md:w-6/12 my-auto">
          <img src="/staff-img.jpg" alt="Staff Sarang Coffee" className="lg:max-w-[80%] rounded-xl md:rounded-md md:ml-8 lg:ml-20 " />
        </div>

        <div className="md:w-5/12 lg:w-4/12 mt-5 md:ml-12 lg:ml-6 md:my-auto">
          <TitleParagraph>Staff Professional</TitleParagraph>
          <TextParagraph className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ab dignissimos quaerat in velit, beatae expedita, placeat magnam est hic mollitia corporis perspiciatis doloremque laboriosam laborum esse ipsa consectetur officiis
            nesciunt facilis tempora ad delectus. Magnam dignissimos eum ad enim!
          </TextParagraph>
        </div>
      </div>
    </div>
  );
}
