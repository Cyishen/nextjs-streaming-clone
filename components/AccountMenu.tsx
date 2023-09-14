import React from 'react';


interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black bg-opacity-30 w-56 absolute top-14 right-0 py-5 flex-col flex rounded-lg">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="/images/sanji.jpeg" alt="user" />
          <p className="text-white text-sm group-hover/item:underline">user name</p>
        </div>
      </div>
      
      <hr className="bg-black bg-opacity-30 border-0 h-px my-4" />

      <div className="text-center text-white text-sm hover:underline">
        Sign out
      </div>
    </div>
  )
}

export default AccountMenu;