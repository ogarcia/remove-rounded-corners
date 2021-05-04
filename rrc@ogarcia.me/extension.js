const Main = imports.ui.main;
function init() {}
function enable() {
  Main.panel._leftCorner.add_style_class_name('no-radius');
  Main.panel._rightCorner.add_style_class_name('no-radius');
}
function disable() {
  Main.panel._leftCorner.remove_style_class_name('no-radius');
  Main.panel._rightCorner.remove_style_class_name('no-radius');
}
