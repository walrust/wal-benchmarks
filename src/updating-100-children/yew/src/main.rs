use parent_component::ParentComponent;

mod child_component;
mod parent_component;

fn main() {
    yew::Renderer::<ParentComponent>::new().render();
}
