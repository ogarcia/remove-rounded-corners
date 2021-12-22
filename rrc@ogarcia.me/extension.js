const Main = imports.ui.main;
function init() {}
function enable() {
  Main.layoutManager.uiGroup.add_style_class_name("remove-rounded-corners");
}
function disable() {
  Main.layoutManager.uiGroup.remove_style_class_name("remove-rounded-corners");
}
