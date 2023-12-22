using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using blazor.Pages;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<RootComponent>("#app");

await builder.Build().RunAsync();
