#pragma checksum "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\App\Shop.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "624f2902418236dbdc3966c907c4e7d3b78c2f42"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_App_Shop), @"mvc.1.0.view", @"/Views/App/Shop.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/App/Shop.cshtml", typeof(AspNetCore.Views_App_Shop))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\_ViewImports.cshtml"
using DutchTreat.Controllers;

#line default
#line hidden
#line 2 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\_ViewImports.cshtml"
using DutchTreat.ViewModels;

#line default
#line hidden
#line 3 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\_ViewImports.cshtml"
using DutchTreat.Data.Entities;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"624f2902418236dbdc3966c907c4e7d3b78c2f42", @"/Views/App/Shop.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"402ff29ed5304f90d7247425045b59e26db665d3", @"/Views/_ViewImports.cshtml")]
    public class Views_App_Shop : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Product>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(29, 25, true);
            WriteLiteral("<h1>Shop</h1>\r\n<p>Count: ");
            EndContext();
            BeginContext(55, 13, false);
#line 3 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
     Write(Model.Count());

#line default
#line hidden
            EndContext();
            BeginContext(68, 6, true);
            WriteLiteral("</p>\r\n");
            EndContext();
#line 4 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
 foreach (var p in Model)
{

#line default
#line hidden
            BeginContext(104, 5, true);
            WriteLiteral("\t<li>");
            EndContext();
            BeginContext(110, 7, false);
#line 6 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
   Write(p.Title);

#line default
#line hidden
            EndContext();
            BeginContext(117, 7, true);
            WriteLiteral("</li>\r\n");
            EndContext();
#line 7 "C:\Users\Shakthi\Documents\DutchTreat\DutchTreat\Views\App\Shop.cshtml"
}

#line default
#line hidden
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Product>> Html { get; private set; }
    }
}
#pragma warning restore 1591
