use wal_core::component::Component;
use wal_rsx::rsx;

pub(crate) struct NestedComponent {
    pub(crate) counter: u8,
    pub(crate) value: u8,
}

#[derive(Hash)]
pub(crate) struct NestedComponentProperties {
    pub(crate) counter: u8,
    pub(crate) value: u8,
}

impl Component for NestedComponent {
    type Message = ();

    type Properties = NestedComponentProperties;

    fn new(props: Self::Properties) -> Self {
        Self {
            counter: props.counter,
            value: props.value,
        }
    }

    fn view(
        &self,
        _behavior: &mut impl wal_core::component::behavior::Behavior<Self>,
    ) -> wal_core::virtual_dom::VNode {
        rsx! {
            if self.counter != 0 {
                <div>
                    <NestedComponent props = NestedComponentProperties {
                        counter: self.counter - 1,
                        value: self.value,
                    } />
                </div>
            } else {
                format!("{}", self.value)
            }
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        true
    }
}
