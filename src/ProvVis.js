import React, {Component} from 'react';

import Graph, {GraphParser} from '@hms-dbmi-bgm/react-workflow-viz';
import '@hms-dbmi-bgm/react-workflow-viz/dist/react-workflow-viz.min.css';


export default function ProvVis(props) {
  /* eslint-disable */
  return (
    <GraphParser
      parsingOptions={{
        parseBasicIO: false,
        showIndirectFiles: true,
        showParameters: false,
        showReferenceFiles: true
      }}
      parentItem={{ name: 'Is this used?' }}
      steps={
        [{"meta":{"software_used":[{"version":"0.9.4","@id":"/softwares/d064191c-b2fc-4c7b-971f-5e2034dc902d/","name":"Clodius","source_url":"https://github.com/higlass/clodius","display_title":"clodius_0.9.4","@type":["Software","Item"],"title":"clodius_0.9.4","uuid":"d064191c-b2fc-4c7b-971f-5e2034dc902d","principals_allowed":{"view":["system.Everyone"],"edit":["group.admin"]}}],"analysis_step_types":["file format conversion"]},"name":"bedtobeddb","inputs":[{"meta":{"type":"data file","global":true,"cardinality":"single","file_format":{"@type":["FileFormat","Item"],"uuid":"69f6d609-f2ac-4c82-9472-1a13331b5ce9","@id":"/file-formats/bed/","display_title":"bed","principals_allowed":{"view":["system.Everyone"],"edit":["group.admin"]}}},"name":"bedfile","source":[{"name":"bedfile"}]}],"outputs":[{"meta":{"type":"data file","global":true,"cardinality":"single","file_format":"d1311111-218e-4f61-aaf0-91f226248b2c"},"name":"beddbfile","target":[{"name":"beddbfile"}]}]}]
      }
    >
      <Graph rowSpacingType={'compact'} minimumHeight={300} />
    </GraphParser>
  );
  /* eslint-enable */
}
