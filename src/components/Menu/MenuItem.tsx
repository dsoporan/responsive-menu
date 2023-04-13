import {IBaseMenu, IMenu} from "../../api/server";
import {useState} from "react";

interface MenuItemProps {
    onNavigation: (slug: IMenu) => void;
    slug: IMenu;
}

export default function MenuItem({ onNavigation, slug } : MenuItemProps){
    const [isSublistExpanded, setIsSublistExpanded] = useState<boolean>(false);

    return(
        <div className="menu-list-item-container" data-test={`list-item:${slug.slug}`}>
            <li
                className="menu-list-item"
                onClick={() => {
                    setIsSublistExpanded(!isSublistExpanded);
                    onNavigation(slug)
                }}
            >
                {slug.title}
            </li>

            {slug.children && (
                <ul className={`${isSublistExpanded ? 'menu-list-sublist expanded' : 'menu-list-sublist'}`}>
                    {slug.children?.map((childrenProps) => (
                        <li
                            key={childrenProps.slug}
                            className="menu-list-item subitem"
                            onClick={() => onNavigation(childrenProps)}
                        >
                            {childrenProps.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}