import homesvg from "../../../assets/svgs/home.svg";
import shorts from "../../../assets/svgs/shorts.svg";
import subscription from "../../../assets/svgs/subscription.svg";
import you from "../../../assets/svgs/you.svg";
import history from "../../../assets/svgs/history.svg";
import MenuListItem from "./MenuListItem";
import feedback from '../../../assets/svgs/feedback.svg';
import help from '../../../assets/svgs/help.svg';
import report from '../../../assets/svgs/report.svg';
import settings from '../../../assets/svgs/settings.svg';
import trending from '../../../assets/svgs/trending.svg';
import music from '../../../assets/svgs/music.svg';
import movies from '../../../assets/svgs/movies.svg';
import sports from '../../../assets/svgs/sports.svg';
import podcast from '../../../assets/svgs/podcast.svg';

const MenuItems = () => {
  const menuList = [
    {
      menuText: "Home",
      svg: homesvg
    },
    {
      menuText: "Shorts",
      svg: shorts,
    },
    {
      menuText: "subscription",
      svg: subscription,
    },
  ];

  const secondMenu = [
    {
      menuText: "You",
      svg: you,
    },
    {
      menuText: "History",
      svg: history,
    }
  ]

  const fourthMenu = [
    {
      menuText: "Settings",
      svg: settings,
    },
    {
      menuText: "Report History",
      svg: report,
    },
    {
      menuText: "Help",
      svg: help,
    },
    {
      menuText: "Send Feedback",
      svg: feedback,
    }
  ]

  const thirdMenu = [
    {
      menuText: "Trending",
      svg: trending,
    },
    {
      menuText: "Music",
      svg: music,
    },
    {
      menuText: "Movies",
      svg: movies,
    },
    {
      menuText: "Sports",
      svg: sports,
    },
    {
      menuText: "PodCasts",
      svg: podcast,
    }
  ]

  return (
    <div>
      <MenuListItem menuList={menuList} />
      <MenuListItem menuList={secondMenu} />
      <MenuListItem menuList={thirdMenu} menuHeading="Explore"/>
      <MenuListItem menuList={fourthMenu} isLastItem= {true} />
    </div>
  );
};

export default MenuItems;
