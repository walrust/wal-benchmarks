use root_component::RootComponent;

mod nested_component;
mod root_component;

fn main() {
    yew::Renderer::<RootComponent>::new().render();
}
