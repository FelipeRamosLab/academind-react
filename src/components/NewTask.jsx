export default function NewTask() {
    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm" />
        <button className="text-stone-700 hove:text-stone-950">Add Task</button>
    </div>;
}
