import { colors, fonts } from './theme'

const ReactSelectStyles = () => (
  <style jsx global>{`
    .Select {
      position: relative;
    }
    .Select,
    .Select div,
    .Select input,
    .Select span {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .Select.is-disabled > .Select-control {
      background-color: #f9f9f9;
    }
    .Select.is-disabled > .Select-control:hover {
      box-shadow: none;
    }
    .Select.is-disabled .Select-arrow-zone {
      cursor: default;
      pointer-events: none;
      opacity: 0.35;
    }
    .Select-control {
      background-color: ${colors.secondary};
      border-color: ${colors.primary};
      border: 1px solid ${colors.primary};
      color: ${colors.pholderText};
      cursor: default;
      display: table;
      border-spacing: 0;
      border-collapse: separate;
      height: 40px;
      margin-top: 4px;
      outline: none;
      overflow: hidden;
      position: relative;
      width: 300px;
    }
    .Select-control .Select-input:focus {
      outline: none;
    }
    .is-searchable.is-open > .Select-control {
      cursor: text;
    }
    .is-open > .Select-control {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      background: ${colors.secondary};
      border-color: ${colors.primary};
    }
    .is-open > .Select-control .Select-arrow {
      top: -2px;
      border-color: transparent transparent ${colors.primary};
      border-width: 0 5px 5px;
    }
    .is-searchable.is-focused:not(.is-open) > .Select-control {
      cursor: text;
    }
    .is-focused:not(.is-open) > .Select-control {
      border-color: ${colors.outline};
    }
    .Select-placeholder,
    .Select--single > .Select-control .Select-value {
      bottom: 0;
      color: ${colors.pholderText};
      left: 0;
      line-height: 40px;
      padding-left: 10px;
      padding-right: 10px;
      position: absolute;
      right: 0;
      top: 0;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .has-value.Select--single > .Select-control .Select-value .Select-value-label,
    .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
      color: ${colors.text};
    }
    .has-value.Select--single > .Select-control .Select-value a.Select-value-label,
    .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
      cursor: pointer;
      text-decoration: none;
    }
    .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
    .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,
    .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
    .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
      color: #007eff;
      outline: none;
      text-decoration: underline;
    }
    .Select-input {
      height: 34px;
      padding-left: 10px;
      padding-right: 10px;
      vertical-align: middle;
    }
    .Select-input > input {
      width: 100%;
      background: none transparent;
      border: 0 none;
      box-shadow: none;
      cursor: default;
      display: inline-block;
      font-family: inherit;
      font-size: inherit;
      margin: 0;
      outline: none;
      line-height: 14px;
      /* For IE 8 compatibility */
      padding: 8px 0 12px;
      /* For IE 8 compatibility */
      -webkit-appearance: none;
    }
    .is-focused .Select-input > input {
      cursor: text;
    }
    .has-value.is-pseudo-focused .Select-input {
      opacity: 0;
    }
    .Select-control:not(.is-searchable) > .Select-input {
      outline: none;
    }
    .Select-loading-zone {
      cursor: pointer;
      display: table-cell;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 16px;
    }
    .Select-loading {
      -webkit-animation: Select-animation-spin 400ms infinite linear;
      -o-animation: Select-animation-spin 400ms infinite linear;
      animation: Select-animation-spin 400ms infinite linear;
      width: 16px;
      height: 16px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 2px solid ${colors.pholderBg};
      border-right-color: ${colors.text};
      display: inline-block;
      position: relative;
      vertical-align: middle;
    }
    .Select-clear-zone {
      -webkit-animation: Select-animation-fadeIn 200ms;
      -o-animation: Select-animation-fadeIn 200ms;
      animation: Select-animation-fadeIn 200ms;
      color: ${colors.pholderText};
      cursor: pointer;
      display: table-cell;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 17px;
    }
    .Select-clear-zone:hover {
      color: #D0021B;
    }
    .Select-clear {
      display: inline-block;
      font-size: 18px;
      line-height: 1;
    }
    .Select--multi .Select-clear-zone {
      width: 17px;
    }
    .Select-arrow-zone {
      cursor: pointer;
      display: table-cell;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 25px;
      padding-right: 5px;
    }
    .Select-arrow {
      border-color: ${colors.primary} transparent transparent;
      border-style: solid;
      border-width: 5px 5px 2.5px;
      display: inline-block;
      height: 0;
      width: 0;
      position: relative;
    }
    .Select--multi .Select-multi-value-wrapper {
      display: inline-block;
    }
    .Select .Select-aria-only {
      display: inline-block;
      height: 1px;
      width: 1px;
      margin: -1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
      float: left;
    }
    @keyframes Select-animation-fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .Select-menu-outer {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: ${colors.secondary};
      border: 1px solid ${colors.primary};
      border-top: 0;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
      box-sizing: border-box;
      margin-top: -1px;
      max-height: 200px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: 1;
      -webkit-overflow-scrolling: touch;
    }
    .Select-menu {
      max-height: 198px;
      overflow-y: auto;
    }
    .Select-option {
      box-sizing: border-box;
      background-color: ${colors.secondary};
      color: ${colors.text};
      cursor: pointer;
      display: block;
      padding: 8px 10px;
    }
    .Select-option:last-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .Select-option.is-selected {
      background-color: ${colors.selected};
      color: ${colors.text};
    }
    .Select-option.is-focused {
      background-color: ${colors.focused};
      color: ${colors.text};
    }
    .Select-option.is-disabled {
      color: #cccccc;
      cursor: default;
    }
    .Select-noresults {
      box-sizing: border-box;
      color: ${colors.primary};
      cursor: default;
      display: block;
      padding: 8px 10px;
    }
    .Select--multi .Select-input {
      vertical-align: middle;
      margin-left: 10px;
      padding: 0;
    }
    .Select--multi.has-value .Select-input {
      margin-left: 5px;
    }
    .Select--multi .Select-value {
      background-color: ${colors.focused};
      border-radius: 2px;
      border: 1px solid ${colors.selectedBorder};
      color: #007eff;
      display: inline-block;
      font-size: 0.9em;
      line-height: 1.4;
      margin-left: 5px;
      margin-top: 5px;
      vertical-align: top;
    }
    .Select--multi .Select-value-icon,
    .Select--multi .Select-value-label {
      display: inline-block;
      vertical-align: middle;
    }
    .Select--multi .Select-value-label {
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      cursor: default;
      padding: 2px 5px;
    }
    .Select--multi a.Select-value-label {
      color: #007eff;
      cursor: pointer;
      text-decoration: none;
    }
    .Select--multi a.Select-value-label:hover {
      text-decoration: underline;
    }
    .Select--multi .Select-value-icon {
      cursor: pointer;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
      border-right: 1px solid ${colors.selectedBorder};
      padding: 1px 5px 3px;
    }
    .Select--multi .Select-value-icon:hover,
    .Select--multi .Select-value-icon:focus {
      background-color: rgba(0, 113, 230, 0.08);
      color: #0071e6;
    }
    .Select--multi .Select-value-icon:active {
      background-color: ${colors.selectedBorder};
    }
    .Select--multi.is-disabled .Select-value {
      background-color: #fcfcfc;
      border: 1px solid #e3e3e3;
      color: ${colors.text};
    }
    .Select--multi.is-disabled .Select-value-icon {
      cursor: not-allowed;
      border-right: 1px solid #e3e3e3;
    }
    .Select--multi.is-disabled .Select-value-icon:hover,
    .Select--multi.is-disabled .Select-value-icon:focus,
    .Select--multi.is-disabled .Select-value-icon:active {
      background-color: #fcfcfc;
    }
    @keyframes Select-animation-spin {
      to {
        transform: rotate(1turn);
      }
    }
  `}</style>
)

export default ReactSelectStyles
