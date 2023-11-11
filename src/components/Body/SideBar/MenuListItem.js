const MenuListItem = (props) => {
  const { menuList, menuHeading, isLastItem } = props;

  return (
    <div>
      {menuHeading && <h4 className="text-base font-bold mb-2">{menuHeading}</h4> }
      <ul>
        {menuList.map((menuListItem) => (
          <li key={menuListItem.menuText} className="flex gap-x-5 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <img src={menuListItem.svg} alt="" />
            {menuListItem.menuText}
          </li>
        ))}
      </ul>
      {!isLastItem && <hr className="mt-4 mb-4" />}
    </div>
  );
};

export default MenuListItem;
