$(function() {
	dispatcher = new Dispatcher();
	var urlMonitor = new URLMonitor(dispatcher);
	var ajax = new OfflineAjax(dispatcher);
	var visualizer = new Visualizer(dispatcher, 'svg');
	var svg = visualizer.svg;
	var visualizerUI = new VisualizerUI(dispatcher, svg);
	var annotatorUI = new AnnotatorUI(dispatcher, svg);
	var spinner = new Spinner(dispatcher, '#spinner');
	var logger = new AnnotationLog(dispatcher);
	dispatcher.post('init');

    $(document.body).on("vulyk.next", function(e, data) {
    	window._current_doc = data.result.task.data;
    	dispatcher.post(0, "renderData", [data.result.task.data]);
    });
});