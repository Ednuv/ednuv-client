import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageSixComponent } from './components/pages/home-page-six/home-page-six.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
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
import { NormalGuard } from './components/pages/services/normal.guard';
import {AdminDashboardComponent} from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './components/pages/services/admin.guard';
import { QuizComponent } from './components/pages/admin/admin-dashboard/quiz/quiz.component';
import {QuizCategoriesComponent} from './components/pages/admin/admin-dashboard/quiz/quiz-categories/quiz-categories.component';
import {QuizzesComponent} from './components/pages/admin/admin-dashboard/quiz/quizzes/quizzes.component';
import {QuizQuestionsComponent} from './components/pages/admin/admin-dashboard/quiz/quiz-questions/quiz-questions.component';
import {QuizViewComponent} from './components/pages/admin/admin-dashboard/quiz/quiz-view/quiz-view.component';
import {AddQuizQuestionComponent} from './components/pages/admin/admin-dashboard/quiz/add-quiz-question/add-quiz-question.component';
import {QuizMainComponent} from './components/pages/quiz/quiz-main/quiz-main.component';
import {QuizListComponent} from './components/pages/quiz/quiz-list/quiz-list.component';
import {PreStartComponent} from './components/pages/quiz/pre-start/pre-start.component';
import {QuizStartComponent} from './components/pages/quiz/quiz-start/quiz-start.component';
import { ProjectCategoriesComponent } from './components/pages/admin/admin-dashboard/project/project-categories/project-categories.component';
import { ProjectDescriptionComponent } from './components/pages/admin/admin-dashboard/project/project-description/project-description.component';
import {ProjectComponent} from './components/pages/admin/admin-dashboard/project/project.component';
import {ProjectDisplayComponent} from './components/pages/project/project-display/project-display.component';
import {ProjectDetailComponent} from './components/pages/project/project-detail/project-detail.component';
const routes: Routes = [
    {path: '', component: HomePageSixComponent},
    {path: 'about-style-2', component: AboutPageTwoComponent},
    {path: 'instructor-1', component: InstructorsPageOneComponent},
    {path: 'single-instructor', component: InstructorsDetailsPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'single-events', component: EventsDetailsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'feedback', component: FeedbackPageComponent},
    {path: 'partner', component: PartnerPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'faqs', component: FaqPageComponent},
    {path: 'error-404', component: ErrorPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'courses-category-style-1', component: CategoryPageOneComponent},
    {path: 'courses-category-style-2', component: CategoryPageTwoComponent},
    {path: 'courses-category-style-3', component: CategoryPageThreeComponent},
    {path: 'courses-list', component: CoursesListPageComponent},
    {path: 'courses-2-columns-style-1', component: CoursesGridStyleOneColumnsTwoPageComponent},
    {path: 'courses-3-columns-style-1', component: CoursesGridStyleOneColumnsThreePageComponent},
    {path: 'courses-4-columns-style-1', component: CoursesGridStyleOneColumnsFourPageComponent},
    {path: 'single-courses', component: CoursesDetailsPageComponent},
    {path: 'my-dashboard', component: MyDashboardPageComponent,canActivate:[NormalGuard]},
    {path: 'orders', component: OrdersPageComponent},
    {path: 'downloads', component: DownloadsPageComponent},
    {path: 'edit-address', component: EditAddressPageComponent},
    {path: 'edit-account', component: EditAccountPageComponent},
    {path: 'edit-billing-address', component: EditBillingAddressPageComponent},
    {path: 'edit-shipping-address', component: EditShippingAddressPageComponent},
    {path: 'blog-style-1', component: BlogGridPageComponent},
    {path: 'blog-style-2', component: BlogRightSidebarPageComponent},
    {path: 'blog-style-3', component: BlogFullWidthPageComponent},
    {path: 'single-blog', component: BlogDetailsPageComponent},
    {path: 'shop-grid', component: ShopGridPageComponent},
    {path: 'shop-grid-fullwidth', component: ShopFullWidthPageComponent},
    {path: 'single-products', component: ProductsDetailsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'quiz', component: QuizComponent,
    canActivate:[AdminGuard],
     children:[
       {
         path:'quizcategories',
         component: QuizCategoriesComponent
       },
       {
        path:'quizzes',
        component: QuizzesComponent
      },
      {
        path:'quizview',
        component: QuizViewComponent
      },
      {
        path:'quizquestions/:qId/:title',
        component: QuizQuestionsComponent
      },
      {
        path:'add-question/:qId',
        component: AddQuizQuestionComponent
      },

     ],
    },
  {path: 'project-admin', component: ProjectComponent,
    canActivate:[AdminGuard],
     children:[
      {
        path:'projectcategories-admin',
        component: ProjectCategoriesComponent
      },
      {
        path:'projectdescription-admin',
        component: ProjectDescriptionComponent
      },
     ],
    },
  {path: 'quiz-main', component: QuizMainComponent},
  {path: 'quiz-pre-start/:qid', component: PreStartComponent},
  {path: 'quiz-start/:qid', component: QuizStartComponent},
  {path: 'quiz-list/:cId', component: QuizListComponent},
  {path: 'project-display/:cid', component: ProjectDisplayComponent},
  {path: 'project-detail/:cid', component: ProjectDetailComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent,canActivate:[AdminGuard]},
    {path: '**', component: ErrorPageComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }