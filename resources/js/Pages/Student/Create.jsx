import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        id: "",
        name: "",
        age: "",
        image: "",
        status: "active",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("student.store"));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Enter New Student
                </h2>
            }
        >
            <Head title="Enter New Student" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-slate-200 shadow sm:rounded-lg"
                            >
                                <InputLabel
                                    htmlFor="image_path"
                                    value="Student Image"
                                    className="mt-6"
                                />
                                <TextInput
                                    id="image_path"
                                    type="file"
                                    name="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                    className="mt-1 block w-full p-1 bg-slate-50 rounded-md"
                                />

                                <InputLabel
                                    htmlFor="name"
                                    value="Student Name"
                                    className="mt-6"
                                />
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1 block w-full p-1 bg-slate-50 rounded-md"
                                />

                                <InputLabel
                                    htmlFor="age"
                                    value="Student age"
                                    className="mt-6"
                                />
                                <TextInput
                                    id="age"
                                    type="number"
                                    name="age"
                                    value={data.age}
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("age", e.target.value)
                                    }
                                    className="mt-1 block w-full p-1 bg-slate-50 rounded-md"
                                />
                                <InputLabel
                                    htmlFor="status"
                                    value="Current Status"
                                    className="mt-6"
                                />
                                <select
                                    name="status"
                                    id="status"
                                    value={data.status}
                                    onChange={(e) => {
                                        setData("status", e.target.value);
                                        console.log(e.target.value);
                                    }}
                                    className="mt-1 block w-full p-1 bg-slate-50 rounded-md"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />
                                <div className="flex items-center justify-end mt-8 gap-3">
                                    <Link
                                        href={route("student.index")}
                                        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </Link>
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="rounded-md border border-gray-300 bg-blue-500 px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Create;
