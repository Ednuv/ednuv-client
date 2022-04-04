import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { StickyNavModule } from 'ng2-sticky-nav';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { HeaderStyleOneComponent } from './components/common/header-style-one/header-style-one.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { PartnerStyleOneComponent } from './components/common/partner-style-one/partner-style-one.component';
import { InstructorsStyleOneComponent } from './components/common/instructors-style-one/instructors-style-one.component';
import { BecomeInstructorPartnerComponent } from './components/common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { HeaderStyleTwoComponent } from './components/common/header-style-two/header-style-two.component';
import { OurMissionComponent } from './components/common/our-mission/our-mission.component';
import { InstructorsStyleTwoComponent } from './components/common/instructors-style-two/instructors-style-two.component';
import { WebinarCountdownComponent } from './components/common/webinar-countdown/webinar-countdown.component';
import { StudentsFeedbackFormComponent } from './components/common/students-feedback-form/students-feedback-form.component';
import { HomePageSixComponent } from './components/pages/home-page-six/home-page-six.component';
import { PartnerStyleTwoComponent } from './components/common/partner-style-two/partner-style-two.component';
import { OfferComponent } from './components/common/offer/offer.component';
import { FeedbackFormComponent } from './components/common/feedback-form/feedback-form.component';
import { HeaderStyleThreeComponent } from './components/common/header-style-three/header-style-three.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { InstructorsStyleThreeComponent } from './components/common/instructors-style-three/instructors-style-three.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { CategoriesStyleThreeComponent } from './components/common/categories-style-three/categories-style-three.component';
import { HeaderStyleFourComponent } from './components/common/header-style-four/header-style-four.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { OurStoryComponent } from './components/common/our-story/our-story.component';
import { OurValuesComponent } from './components/common/our-values/our-values.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogFullWidthPageComponent } from './components/pages/blog-full-width-page/blog-full-width-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ShopGridPageComponent } from './components/pages/shop-grid-page/shop-grid-page.component';
import { ShopFullWidthPageComponent } from './components/pages/shop-full-width-page/shop-full-width-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CategoryPageOneComponent } from './components/pages/category-page-one/category-page-one.component';
import { CategoryPageTwoComponent } from './components/pages/category-page-two/category-page-two.component';
import { CategoryPageThreeComponent } from './components/pages/category-page-three/category-page-three.component';
import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
import { CoursesGridStyleOneColumnsTwoPageComponent } from './components/pages/courses-grid-style-one-columns-two-page/courses-grid-style-one-columns-two-page.component';
import { CoursesGridStyleOneColumnsThreePageComponent } from './components/pages/courses-grid-style-one-columns-three-page/courses-grid-style-one-columns-three-page.component';
import { CoursesGridStyleOneColumnsFourPageComponent } from './components/pages/courses-grid-style-one-columns-four-page/courses-grid-style-one-columns-four-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { MyDashboardPageComponent } from './components/pages/my-dashboard-page/my-dashboard-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { DownloadsPageComponent } from './components/pages/downloads-page/downloads-page.component';
import { EditAddressPageComponent } from './components/pages/edit-address-page/edit-address-page.component';
import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';
import { EditBillingAddressPageComponent } from './components/pages/edit-billing-address-page/edit-billing-address-page.component';
import { EditShippingAddressPageComponent } from './components/pages/edit-shipping-address-page/edit-shipping-address-page.component';
import {HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders } from './components/pages/services/auth.intercepter';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { QuizComponent } from './components/pages/admin/admin-dashboard/quiz/quiz.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { QuizCategoriesComponent } from './components/pages/admin/admin-dashboard/quiz/quiz-categories/quiz-categories.component';
import { QuizzesComponent } from './components/pages/admin/admin-dashboard/quiz/quizzes/quizzes.component';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { QuizQuestionsComponent } from './components/pages/admin/admin-dashboard/quiz/quiz-questions/quiz-questions.component';
import { QuizViewComponent } from './components/pages/admin/admin-dashboard/quiz/quiz-view/quiz-view.component';
import { AddQuizQuestionComponent } from './components/pages/admin/admin-dashboard/quiz/add-quiz-question/add-quiz-question.component';
import { QuizMainComponent } from './components/pages/quiz/quiz-main/quiz-main.component';
import { QuizListComponent } from './components/pages/quiz/quiz-list/quiz-list.component';
import { PreStartComponent } from './components/pages/quiz/pre-start/pre-start.component';
import { QuizStartComponent } from './components/pages/quiz/quiz-start/quiz-start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomesixAboutComponent } from './components/pages/home-page-six/homesix-about/homesix-about.component';
import { HomesixCoursesComponent } from './components/pages/home-page-six/homesix-courses/homesix-courses.component';
import { HomesixMainBannerComponent } from './components/pages/home-page-six/homesix-main-banner/homesix-main-banner.component';
import { ProjectCategoriesComponent } from './components/pages/admin/admin-dashboard/project/project-categories/project-categories.component';
import { ProjectDescriptionComponent } from './components/pages/admin/admin-dashboard/project/project-description/project-description.component';
import {ProjectComponent} from './components/pages/admin/admin-dashboard/project/project.component';
import { ProjectDisplayComponent } from './components/pages/project/project-display/project-display.component';
import { ProjectDetailComponent } from './components/pages/project/project-detail/project-detail.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddBlogComponent } from './components/pages/admin/admin-dashboard/blog/add-blog/add-blog.component';
import { DisplayBlogComponent } from './components/pages/admin/admin-dashboard/blog/display-blog/display-blog.component';
import { AdminBlogComponent } from './components/pages/admin/admin-dashboard/blog/admin-blog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PreloaderComponent,
    HeaderStyleOneComponent,
    FunfactsComponent,
    PartnerStyleOneComponent,
    InstructorsStyleOneComponent,
    BecomeInstructorPartnerComponent,
    FeedbackStyleOneComponent,
    BlogComponent,
    HeaderStyleTwoComponent,
    OurMissionComponent,
    InstructorsStyleTwoComponent,
    WebinarCountdownComponent,
    StudentsFeedbackFormComponent,
    HomePageSixComponent,
    PartnerStyleTwoComponent,
    OfferComponent,
    FeedbackFormComponent,
    HeaderStyleThreeComponent,
    BoxesComponent,
    FeedbackStyleTwoComponent,
    InstructorsStyleThreeComponent,
    FeaturesComponent,
    CategoriesStyleThreeComponent,
    HeaderStyleFourComponent,
    HowItWorksComponent,
    AboutPageTwoComponent,
    OurStoryComponent,
    OurValuesComponent,
    InstructorsPageOneComponent,
    InstructorsDetailsPageComponent,
    GalleryPageComponent,
    EventsPageComponent,
    EventsDetailsPageComponent,
    PricingPageComponent,
    FeedbackPageComponent,
    PartnerPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FaqPageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent,
    BlogGridPageComponent,
    BlogRightSidebarPageComponent,
    BlogFullWidthPageComponent,
    BlogDetailsPageComponent,
    ShopGridPageComponent,
    ShopFullWidthPageComponent,
    ProductsDetailsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ContactPageComponent,
    CategoryPageOneComponent,
    CategoryPageTwoComponent,
    CategoryPageThreeComponent,
    CoursesListPageComponent,
    CoursesGridStyleOneColumnsTwoPageComponent,
    CoursesGridStyleOneColumnsThreePageComponent,
    CoursesGridStyleOneColumnsFourPageComponent,
    CoursesDetailsPageComponent,
    MyDashboardPageComponent,
    OrdersPageComponent,
    DownloadsPageComponent,
    EditAddressPageComponent,
    EditAccountPageComponent,
    EditBillingAddressPageComponent,
    EditShippingAddressPageComponent,
    AdminDashboardComponent,
    QuizComponent,
    QuizCategoriesComponent,
    QuizzesComponent,
    QuizQuestionsComponent,
    QuizViewComponent,
    AddQuizQuestionComponent,
    QuizMainComponent,
    QuizListComponent,
    PreStartComponent,
    QuizStartComponent,
    HomesixAboutComponent,
    HomesixCoursesComponent,
    HomesixMainBannerComponent,
    ProjectCategoriesComponent,
    ProjectDescriptionComponent,
    ProjectComponent,
    ProjectDisplayComponent,
    ProjectDetailComponent,
    AddBlogComponent,
    DisplayBlogComponent,
    AdminBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CountUpModule,
    TabsModule,
    NgxScrollTopModule,
    StickyNavModule,
    LightboxModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    MatSnackBarModule,
    NgxMatFileInputModule,
    NgbModule,
    CKEditorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
