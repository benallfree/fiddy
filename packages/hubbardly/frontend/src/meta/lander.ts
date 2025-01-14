import splashImg from '$src/assets/img/splash.webp?enhanced'
import {
  faDollarSign,
  faHeartCircleCheck,
  faLightbulb,
  faListAlt,
  faLock,
  faPeopleRoof,
  faSave,
  faSearch,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { APP_NAME, PREMIUM_NAME } from './constants'

export const LANDER = {
  hero: {
    title: `Discover exclusive recipes from your favorite culinary creators`,
    splashImg,
    cta: {
      text: `Join #communities# with and follow #creators# with exclusive #recipes# or create your own community on ${APP_NAME} `,
      button: {
        text: `Get Started`,
        link: `/pricing`,
      },
    },
  },
  features: {
    main: [
      {
        title: `Communities`,
        tagline: `Discover, Join, and Cook with Specialized Communities`,
        content: `${APP_NAME} connects you with hundreds of specialized communities, each focused on specific culinary goals such as paleo, Mediterranean, decadent desserts, and more. Join these communities to discover how to make thousands of recipes.`,
        icon: faPeopleRoof,
        linkText: `See what's Cookin'`,
        linkURL: `/pricing`,
      },

      {
        title: `Inspire Your Meals`,
        tagline: `Unlock Unexpected Recipes`,
        content: `${PREMIUM_NAME} gives you premium access to ingredient trends, AI-assisted recipe creation, private communities, and more.`,
        icon: faLightbulb,
        linkText: 'Get Inspired',
        linkURL: `/pricing`,
      },
    ],
    sub: [
      {
        icon: faSearch,
        title: `Free Forever`,
        content: `Search, create and join public communities.`,
      },
      {
        icon: faSave,
        title: `Save Recipes`,
        content: `Save your own recipes for personal use.`,
      },
      {
        icon: faUsers,
        title: `Create Communities`,
        content: `Create your own community and invite other moderators.`,
      },
      {
        icon: faLock,
        title: `Community Privacy`,
        content: `Set your community to public or private, auto-join or approval first.`,
      },
      {
        icon: faStar,
        title: `Recipe Ratings`,
        content: `Recipes have ratings and comments.`,
      },
      {
        icon: faHeartCircleCheck,
        title: `Favorite Recipes`,
        content: `Favorite your best-loved recipes for easy access.`,
      },
      {
        icon: faListAlt,
        title: `Meal Planning`,
        content: `Add meals to your planning list and generate a shopping list for missing ingredients.`,
      },
      {
        title: `Monetize Your Community`,
        content: `${PREMIUM_NAME} allows you to earn revenue from your community.`,
        icon: faDollarSign,
      },
    ],
  },
}
