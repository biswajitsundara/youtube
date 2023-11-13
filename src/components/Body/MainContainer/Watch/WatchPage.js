import { useEffect } from "react";
import { closeMenu } from "../../../../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  
  return (
    <div className="grid col-span-11">
      <div className="ml-16 mt-5">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
