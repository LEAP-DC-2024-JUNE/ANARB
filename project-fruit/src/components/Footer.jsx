export const Footer = () => {
  return (
    <div className="px-[252px] flex flex-col gap-6">
      <div className="flex justify-between border-t-[1px] py-8">
        <div className="flex gap-2.5">
          SHOP
          <div className="flex flex-col gap-[2px]">
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
