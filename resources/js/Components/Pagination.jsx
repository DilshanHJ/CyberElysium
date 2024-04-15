import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    return (
        <nav className="text-center mt-8">
            {links.map((link, index) => (
                <Link
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    key={index}
                    active={link.active}
                    href={link.url}
                    className={
                        "px-4 py-2 text-sm font-medium text-gray-700 rounded shadow-md bg-slate-200 hover:bg-slate-300 m-1 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out " +
                        (link.active ? "bg-slate-300" : "")
                    }
                ></Link>
            ))}
        </nav>
    );
};
export default Pagination;
