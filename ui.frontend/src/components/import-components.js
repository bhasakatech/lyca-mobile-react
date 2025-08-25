/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import withAsyncImport from "../utils/withAsyncImport";

import './Page/Page';
import './Container/Container';
import './ExperienceFragment/ExperienceFragment';

import {MapTo} from '@adobe/aem-react-editable-components';

import {
    CarouselV1IsEmptyFn
} from '@adobe/aem-core-components-react-spa/dist/isEmptyFunctions';

import {
    TitleV2IsEmptyFn
} from '@adobe/aem-core-components-react-base/dist/isEmptyFunctions';

import {
    ContainerV1, ContainerV1IsEmptyFn,
    TabsV1, TabsV1IsEmptyFn,
    AccordionV1,AccordionV1IsEmptyFn,
} from '@adobe/aem-core-components-react-spa';

import Footer from "./Footer/footer"; 
import SignUp from "./SignUp/SignUp"; 
import BlogList from "./BlogList/BlogList"; 
import {
    BreadCrumbV2,BreadCrumbV2IsEmptyFn,
    ButtonV1,ButtonV1IsEmptyFn,
    ImageV2,ImageV2IsEmptyFn,
    LanguageNavigationV1,
    NavigationV1,
    TeaserV1,TeaserV1IsEmptyFn,
    DownloadV1,DownloadV1IsEmptyFn,
    SeparatorV1,SeparatorV1IsEmptyFn,
    ListV2,ListV2IsEmptyFn
} from '@adobe/aem-core-components-react-base';
import Header from "./Header/Header";
import AnnouncementBar from "./AnnouncementBar/AnnouncementBar";
import Carousel from "./Carousel/Carousel";
import JoinLyca from "./JoinLyca/JoinLyca";
import AlreadyWithLyca from "./AlreadyWithLyca/AlreadyWithLyca";
import ChooseAPlan from "./ChooseAPlan/ChooseAPlan";
import ViewRatesNow from "./ViewRates/ViewRates";
import WhyLyca from "./WhyLyca/WhyLyca";
import DownloadApp from "./DownloadApp/DownloadApp";
import Help from "./Help/Help";
import BecomeRetailer from "./BecomeRetailer/BecomeRetailer";
import InternationalCalls from "./CountryCarousel/CountryCarousel";

//lazyload / code splitting example of an internal component
const LazyTextComponent = withAsyncImport(() => import(`./Text/Text`));

//lazyload / code splitting examples of external components
const TitleV2 = withAsyncImport(() => import(`@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2`));
const CarouselV1 = withAsyncImport(() => import(`@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1`));


MapTo('lyca-mobile/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('lyca-mobile/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('lyca-mobile/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});

MapTo('lyca-mobile/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('lyca-mobile/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo('lyca-mobile/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo('lyca-mobile/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});


MapTo('lyca-mobile/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('lyca-mobile/components/navigation')(NavigationV1);
MapTo('lyca-mobile/components/languagenavigation')(LanguageNavigationV1);


MapTo('lyca-mobile/components/tabs')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
MapTo('lyca-mobile/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo('lyca-mobile/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo('lyca-mobile/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});


//lazy load of internal component (hello world)

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {
    emptyLabel: 'Text',

    isEmpty: function (props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

MapTo('lyca-mobile/components/text')(LazyTextComponent, TextEditConfig);
MapTo("lyca-mobile/components/header")(Header);
MapTo('lyca-mobile/components/announcement-bar')(AnnouncementBar);
MapTo('lyca-mobile/components/lyca-carousel')(Carousel);
MapTo('lyca-mobile/components/join-lyca')(JoinLyca);
MapTo('lyca-mobile/components/already-with-lyca')(AlreadyWithLyca);
MapTo('lyca-mobile/components/choose-a-plan')(ChooseAPlan);
MapTo('lyca-mobile/components/view-rates')(ViewRatesNow);
MapTo('lyca-mobile/components/why-lyca')(WhyLyca);
MapTo('lyca-mobile/components/download-app')(DownloadApp);
MapTo('lyca-mobile/components/help')(Help);
MapTo('lyca-mobile/components/become-retailer')(BecomeRetailer);
MapTo('lyca-mobile/components/country-carousel')(InternationalCalls);
MapTo('lyca-mobile/components/blog-list')(BlogList);
MapTo('lyca-mobile/components/signUp')(SignUp)
MapTo('lyca-mobile/components/footer')(Footer);