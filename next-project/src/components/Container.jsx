export const Container = (props) => {
  const { tagTitle, subHeading } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <span className="rounded-xl bg-gray-200 px-5 py-1 font-medium text-sm text-gray-600">
          {tagTitle}
        </span>
      </div>
      <p className="font-normal text-xl text-gray-600 text-center">
        {subHeading}
      </p>
    </div>
  );
};
