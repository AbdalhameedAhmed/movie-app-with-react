import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBranch,
  addMovieToBranch,
} from "../../RTK/reducers/watchLaterSlice";

function Model({ visiblty, res, movie }) {
  let branches = useSelector((state) => state.watchLater);
  let [visibltyState, setVisibltyState] = useState("hidden");
  const dispatch = useDispatch();

  useEffect(() => {
    setVisibltyState(visiblty);
  }, [visiblty]);

  const dispatchBranch = () => {
    const branchInput = document.querySelector("#branchName");
    if (!branchInput.value) return;
    dispatch(addBranch({ branchName: branchInput.value, content: [] }));
  };
  function addToWatch(e) {
    e.preventDefault();
    const form = e.target;
    for (let i = 0; i < form.length; i++) {
      if (form[i].checked)
        dispatch(addMovieToBranch({ branchName: form[i].value, movie: movie }));
    }
    setVisibltyState(false);
    res("hidden");
  }

  return (
    <div
      className={`fixed w-screen h-screen pr-4 ${visibltyState} inset-0 bg-stone-900/75 z-20 flex justify-center items-center`}
    >
      <div className="w-80 h-96 bg-white relative p-8 rounded-lg">
        <h1 className="text-black text-xl font-bold mb-4 mt-4">
          Choose your branch
        </h1>

        <button
          className="text-red-700 font-bold text-4xl absolute right-4 top-2"
          onClick={() => {
            setVisibltyState(false);
            res("hidden");
          }}
        >
          <svg
            className="w-4 fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>

        <form onSubmit={addToWatch} className="flex flex-col">
          <div className="form-info min-h-fit max-h-32 overflow-y-auto mb-4 text-lg flex flex-col gap-1">
            {branches.map((branch) => {
              return (
                <label className="text-black" key={branch.branchName}>
                  <input
                    type="checkbox"
                    name="branch"
                    className="mr-2"
                    value={branch.branchName}
                  />
                  {branch.branchName}
                </label>
              );
            })}
          </div>

          <input
            type="submit"
            value="Save"
            className="text-black custom-btn inline-block w-fit !px-8 !py-2 !rounded-lg"
          />
        </form>

        <h2 className="text-black my-3 text-lg font-bold">Add your branch</h2>

        <div className="text-black flex gap-4">
          <input
            type="text"
            name="branchName"
            id="branchName"
            className="border border-black rounded-xl box-border pl-2 w-40"
          />

          <button
            className="text-black custom-btn inline-block w-fit !px-8 !py-2 !rounded-lg"
            onClick={() => dispatchBranch()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Model;
