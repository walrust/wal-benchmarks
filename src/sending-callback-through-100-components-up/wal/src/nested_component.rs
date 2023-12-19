use wal_core::component::{callback::Callback, Component};
use wal_rsx::rsx;

pub(crate) struct NestedComponent {
    pub(crate) counter: u8,
    pub(crate) callback: Callback<()>,
}

#[derive(Hash)]
pub(crate) struct NestedComponentProperties {
    pub(crate) counter: u8,
    pub(crate) callback: Callback<()>,
}

impl Component for NestedComponent {
    type Message = ();

    type Properties = NestedComponentProperties;

    fn new(props: Self::Properties) -> Self {
        Self {
            counter: props.counter,
            callback: props.callback,
        }
    }

    fn view(
        &self,
        _behavior: &mut impl wal_core::component::behavior::Behavior<Self>,
    ) -> wal_core::virtual_dom::VNode {
        let callback = self.callback.clone();

        rsx! {
            if self.counter != 0 {
                <div>
                    <NestedComponent props = NestedComponentProperties {
                        counter: self.counter - 1,
                        callback: Callback::new(move |_| callback.emit(()))
                    }/>
                </div>
            } else {
                <button id="button" onclick={Callback::new(move |_| callback.emit(()))}> "Click me" </button>
            }
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        false
    }
}
