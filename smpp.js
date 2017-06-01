"use strict";

/******************************************************************************
 * Constant Definitions
 */
var DT = Object.freeze({
    c_octet_string              : 0x01,
    octet_string                : 0x02,
    integer                     : 0x03,
});

var COMMANDS = Object.freeze({
    bind_receiver : {
        cmd : 0x00000001,
        params: {
            system_id         : {name: "system_id",         type: DT.c_octet_string, max_len:  16},
            password          : {name: "password",          type: DT.c_octet_string, max_len:   9},
            system_type       : {name: "system_type",       type: DT.c_octet_string, max_len:  13},
            interface_version : {name: "interface_version", type: DT.integer,        max_len:   1},
            addr_ton          : {name: "addr_ton",          type: DT.integer,        max_len:   1},
            addr_npi          : {name: "addr_npi",          type: DT.integer,        max_len:   1},
            address_range     : {name: "address_range",     type: DT.c_octet_string, max_len:  41}},
        desc  : ""},
    bind_transmitter : {
        cmd : 0x00000002,
        params : {
            system_id           : {name: "system_id",         type: DT.c_octet_string, max_len:  16},
            password            : {name: "password",          type: DT.c_octet_string, max_len:   9},
            system_type         : {name: "system_type",       type: DT.c_octet_string, max_len:  13},
            interface_version   : {name: "interface_version", type: DT.integer,        max_len:   1},
            addr_ton            : {name: "addr_ton",          type: DT.integer,        max_len:   1},
            addr_npi            : {name: "addr_npi",          type: DT.integer,        max_len:   1},
            address_range       : {name: "address_range",     type: DT.c_octet_string, max_len:  41}},
        desc : ""},
    bind_transreceiver : {
        cmd : 0x00000009,
        params: {
            system_id              : {name: "system_id"              , type: DT.c_octet_string, max_len:  16},
            password               : {name: "password"               , type: DT.c_octet_string, max_len:   9},
            system_type            : {name: "system_type"            , type: DT.c_octet_string, max_len:  13},
            interface_version      : {name: "interface_version"      , type: DT.integer,        max_len:   1},
            addr_ton               : {name: "addr_ton"               , type: DT.integer,        max_len:   1},
            addr_npi               : {name: "addr_npi"               , type: DT.integer,        max_len:   1},
            address_range          : {name: "address_range"          , type: DT.c_octet_string, max_len:  41}},
        desc : ""},
    submit_sm : {
        cmd : 0x00000004,
        params: {
            service_type            : {name: "service_type",            type: DT.c_octet_string, max_len:   6},
            source_addr_ton         : {name: "source_addr_ton",         type: DT.integer,        max_len:   1},
            source_addr_npi         : {name: "source_addr_npi",         type: DT.integer,        max_len:   1},
            source_addr             : {name: "source_addr",             type: DT.c_octet_string, max_len:  21},
            dest_addr_ton           : {name: "dest_addr_ton",           type: DT.integer,        max_len:   1},
            dest_addr_npi           : {name: "dest_addr_npi",           type: DT.integer,        max_len:   1},
            dest_addr               : {name: "dest_addr",               type: DT.c_octet_string, max_len:  21},
            esm_class               : {name: "esm_class",               type: DT.integer,        max_len:   1},
            protocol_id             : {name: "protocol_id",             type: DT.integer,        max_len:   1},
            priority_flag           : {name: "priority_flag",           type: DT.integer,        max_len:   1},
            schedule_delivery_time  : {name: "schedule_delivery_time",  type: DT.c_octet_string, max_len:  17},
            validity_period         : {name: "validity_period",         type: DT.c_octet_string, max_len:  17},
            registered_delivery     : {name: "registered_delivery",     type: DT.integer,        max_len:   1},
            replace_if_present_flag : {name: "replace_if_present_flag", type: DT.integer,        max_len:   1},
            data_coding             : {name: "data_coding",             type: DT.integer,        max_len:   1},
            sm_default_msg_id       : {name: "sm_default_msg_id",       type: DT.integer,        max_len:   1},
            sm_length               : {name: "sm_length",               type: DT.integer,        max_len:   1},
            short_message           : {name: "short_message",           type: DT.octet_string,   max_len: 255}},
        desc  : ""},
    submit_sm_resp: {
	cmd : 0x80000004,
        params: {
            message_id              : {name: "message_id",              type: DT.c_octet_string, max_len: 65}},
        desc : ""},	
    delivery_sm : {
        cmd : 0x00000005,
        params: {
            service_type            : {name: "service_type",            type: DT.c_octet_string, max_len:   6},
            source_addr_ton         : {name: "source_addr_ton",         type: DT.integer,        max_len:   1},
            source_addr_npi         : {name: "source_addr_npi",         type: DT.integer,        max_len:   1},
            source_addr             : {name: "source_addr",             type: DT.c_octet_string, max_len:  21},
            dest_addr_ton           : {name: "dest_addr_ton",           type: DT.integer,        max_len:   1},
            dest_addr_npi           : {name: "dest_addr_npi",           type: DT.integer,        max_len:   1},
            dest_addr               : {name: "dest_addr",               type: DT.c_octet_string, max_len:  21},
            esm_class               : {name: "esm_class",               type: DT.integer,        max_len:   1},
            protocol_id             : {name: "protocol_id",             type: DT.integer,        max_len:   1},
            priority_flag           : {name: "priority_flag",           type: DT.integer,        max_len:   1},
            schedule_delivery_time  : {name: "schedule_delivery_time",  type: DT.c_octet_string, max_len:  17},
            validity_period         : {name: "validity_period",         type: DT.c_octet_string, max_len:  17},
            registered_delivery     : {name: "registered_delivery",     type: DT.integer,        max_len:   1},
            replace_if_present_flag : {name: "replace_if_present_flag", type: DT.integer,        max_len:   1},
            data_coding             : {name: "data_coding",             type: DT.integer,        max_len:   1},
            sm_default_msg_id       : {name: "sm_default_msg_id",       type: DT.integer,        max_len:   1},
            sm_length               : {name: "sm_length",               type: DT.integer,        max_len:   1},
            short_message           : {name: "short_message",           type: DT.octet_string,   max_len: 255}},
        desc  : ""},
    delivery_sm_resp: {
	cmd : 0x80000005,
        params: {
            message_id              : {name: "message_id",              type: DT.c_octet_string, max_len: 65}},
        desc : ""},	
    enquire_link : {
        cmd : 0x00000015,
        params: {},
        desc  : ""}
});

var STATUS = Object.freeze({
    "ESME_ROK"                  : {value: 0x00000000, desc: "No Error. Specified in a response PDU to indicate the success of the corresponding request PDU."},
    "ESME_RINVMSGLEN"           : {value: 0x00000001, desc: "Message Length is invalid. short_message field or message_payload TLV has an invalid length (usually too long for the given MC or underlying network technology)."},
    "ESME_RINVCMDLEN"           : {value: 0x00000002, desc: "Command Length is invalid. PDU length is considered invalid, either because the value is too short or too large for the given PDU."},
    "ESME_RINVCMDID"            : {value: 0x00000003, desc: "Invalid Command ID. Command ID is not recognised, either because the operation is not supported or unknown."},
    "ESME_RINVBNDSTS"           : {value: 0x00000004, desc: "Incorrect BIND Status for given command. PDU has been sent in the wrong session state. E.g. sending a submit_sm without first establishing a Bound_TX session state."},
    "ESME_RALYBND"              : {value: 0x00000005, desc: "ESME Already in Bound State. A bind request has been issued within a session that is already bound."},
    "ESME_RINVPRTFLG"           : {value: 0x00000006, desc: "Invalid Priority Flag. Priority flag contains an illegal or unsupported value."},
    "ESME_RINVREGDLVFLG"        : {value: 0x00000007, desc: "Invalid Registered Delivery Flag. Registered field contains an invalid setting."},
    "ESME_RSYSERR"              : {value: 0x00000008, desc: "System Error. MC system error indicating that all or part of the MC is currently unavailable. This can be returned in any response PDU."},
    "ESME_RINVSRCADR"           : {value: 0x0000000A, desc: "Invalid Source Address. Source address of message is considered invalid. Usually this is because the field is either too long or contains invalid characters."},
    "ESME_RINVDSTADR"           : {value: 0x0000000B, desc: "Invalid Destination Address. Destination address of message is considered invalid. Usually this is because the field is either zero length, too long or contains invalid characters."},
    "ESME_RINVMSGID"            : {value: 0x0000000C, desc: "Message ID is invalid. Message ID specified in cancel_sm, query_sm or other operations is invalid."},
    "ESME_RBINDFAIL"            : {value: 0x0000000D, desc: "Bind Failed. A generic failure scenario for a bind attempt. This may be due to a provisioning error, incorrect password or other reason. A MC will typically return this error for an invalid system_id, system_type, password or other attribute that may cause a bind failure."},
    "ESME_RINVPASWD"            : {value: 0x0000000E, desc: "Invalid Password. Password field in bind PDU is invalid. This is usually returned when the length is too short or too long. It is not supposed to be returned when the ESME has specified the incorrect password."},
    "ESME_RINVSYSID"            : {value: 0x0000000F, desc: "Invalid System ID. The System ID field in bind PDU is invalid. This is usually returned when the length is too short or too long. It is not supposed to be returned when the ESME has specified the incorrect system id."},
    "ESME_RCANCELFAIL"          : {value: 0x00000011, desc: "Cancel SM Failed. Generic failure error for cancel_sm operation."},
    "ESME_RREPLACEFAIL"         : {value: 0x00000013, desc: "Replace SM Failed. Generic failure for replace_sm operation."},
    "ESME_RMSGQFUL"             : {value: 0x00000014, desc: "Message Queue Full. Used to indicate a resource error within the MC. This may be interpreted as the maximum number of messages addressed to a single destination or a global maximum of undelivered messages within the MC."},
    "ESME_RINVSERTYP"           : {value: 0x00000015, desc: "Invalid Service Type. Service type is rejected either because it is not recognised by the MC or because its length is not within the defined range."},
    "ESME_RINVNUMDESTS"         : {value: 0x00000033, desc: "Invalid number of destinations. The number_of_dests field in the submit_multi PDU is invalid."},
    "ESME_RINVDLNAME"           : {value: 0x00000034, desc: "Invalid Distribution List name. The dl_name field specified in the submit_multi PDU is either invalid, or non-existent."},
    "ESME_RINVDESTFLAG"         : {value: 0x00000040, desc: "Destination flag is invalid (submit_multi). The dest_flag field in the submit_multi PDU has been encoded with an invalid setting."},
    "ESME_RINVSUBREP"           : {value: 0x00000042, desc: "Submit w/replace functionality has been requested where it is either unsupported or inappropriate for the particular MC. This can typically occur with submit_multi where the context of “replace if present” is often a best effort operation and MCs may not support the feature in submit_multi. Another reason for returning this error would be where the feature has been denied to an ESME."},
    "ESME_RINVESMCLASS"         : {value: 0x00000043, desc: "Invalid esm_class field data. The esm_class field has an unsupported setting."},
    "ESME_RCNTSUBDL"            : {value: 0x00000044, desc: "Cannot Submit to Distribution List.Distribution lists are not supported, are denied or unavailable."},
    "ESME_RSUBMITFAIL"          : {value: 0x00000045, desc: "submit_sm, data_sm or submit_multi failed. Generic failure error for submission operations."},
    "ESME_RINVSRCTON"           : {value: 0x00000048, desc: "Invalid Source address TON. The source TON of the message is either invalid or unsupported."},
    "ESME_RINVSRCNPI"           : {value: 0x00000049, desc: "Invalid Source address NPI. The source NPI of the message is either invalid or unsupported."},
    "ESME_RINVDSTTON"           : {value: 0x00000050, desc: "Invalid Destination address TON. The destination TON of the message is either invalid or unsupported."},
    "ESME_RINVDSTNPI"           : {value: 0x00000051, desc: "Invalid Destination address NPI. The destination NPI of the message is either invalid or unsupported."},
    "ESME_RINVSYSTYP"           : {value: 0x00000053, desc: "Invalid system_type field. The System type of bind PDU has an incorrect length or contains illegal characters."},
    "ESME_RINVREPFLAG"          : {value: 0x00000054, desc: "Invalid replace_if_present flag. The replace_if_present flag has been encoded with an invalid or unsupported setting."},
    "ESME_RINVNUMMSGS"          : {value: 0x00000055, desc: "Invalid number of messages."},
    "ESME_RTHROTTLED"           : {value: 0x00000058, desc: "Throttling error (ESME has exceeded allowed message limits). This type of error is usually returned where an ESME has exceeded a predefined messaging rate restriction applied by the operator."},
    "ESME_RINVSCHED"            : {value: 0x00000061, desc: "Invalid Scheduled Delivery Time. Scheduled delivery time is either the incorrect length or is invalid."},
    "ESME_RINVEXPIRY"           : {value: 0x00000062, desc: "Invalid message validity period (Expiry time). Expiry time is either the incorrect length or is invalid."},
    "ESME_RINVDFTMSGID"         : {value: 0x00000063, desc: "Predefined Message ID is Invalid or specified predefined message was not found. The default (pre-defined) message id is either invalid or refers to a non-existent pre-defined message."},
    "ESME_RX_T_APPN"            : {value: 0x00000064, desc: "ESME Receiver Temporary App Error Code. Rx or Trx ESME is unable to process a delivery due to a temporary problem and is requesting that the message be retried at some future point."},
    "ESME_RX_P_APPN"            : {value: 0x00000065, desc: "ESME Receiver Permanent App Error Code. Rx or Trx ESME is unable to process a delivery due to a permanent problem relating to the given destination address and is requesting that the message and all other messages queued to the same destination should NOT be retried any further."},
    "ESME_RX_R_APPN"            : {value: 0x00000066, desc: "ESME Receiver Reject Message Error Code. Rx or Trx ESME is unable to process a delivery due to a problem relating to the given message and is requesting that the message is rejected and not retried. This does not affect other messages queued for the same ESME or destination address."},
    "ESME_RQUERYFAIL"           : {value: 0x00000067, desc: "query_sm request failed. Generic failure scenario for a query request."},
    "ESME_RINVTLVSTREAM"        : {value: 0x000000C0, desc: "Error in the optional part of the PDU Body. Decoding of TLVs (Optional Parameters) has resulted in one of the following scenarios: • PDU decoding completed with 1- 3 octets of data remaining, indicating a corrupt PDU. • A TLV indicated a length that was not present in the remaining PDU data (e.g. a TLV specifying a length of 10 where only 6 octets of PDU data remain)."},
    "ESME_RTLVNOTALLWD"         : {value: 0x000000C1, desc: "TLV not allowed. A TLV has been used in an invalid context, either inappropriate or deliberately rejected by the operator."},
    "ESME_RINVTLVLEN"           : {value: 0x000000C2, desc: "Invalid Parameter Length. A TLV has specified a length that is considered invalid."},
    "ESME_RMISSINGTLV"          : {value: 0x000000C3, desc: "Expected TLV missing. A mandatory TLV such as the message_payload TLV within a data_sm PDU is missing."},
    "ESME_RINVTLVVAL"           : {value: 0x000000C4, desc: "Invalid TLV Value. The data content of a TLV is invalid and cannot be decoded."},
    "ESME_RDELIVERYFAILURE"     : {value: 0x000000FE, desc: "Transaction Delivery Failure. A data_sm or submit_sm operation issued in transaction mode has resulted in a failed delivery."},
    "ESME_RUNKNOWNERR"          : {value: 0x000000FF, desc: "Unknown Error. Some unexpected error has occurred."},
    "ESME_RSERTYPUNAUTH"        : {value: 0x00000100, desc: "ESME Not authorised to use specified service_type. Specific service_type has been denied for use by the given ESME."},
    "ESME_RPROHIBITED"          : {value: 0x00000101, desc: "ESME Prohibited from using specified operation. The PDU request was recognised but is denied to the ESME."},
    "ESME_RSERTYPUNAVAIL"       : {value: 0x00000102, desc: "Specified service_type is unavailable. Due to a service outage within the MC, a service is unavailable."},
    "ESME_RSERTYPDENIED"        : {value: 0x00000103, desc: "Specified service_type is denied. Due to inappropriate message content wrt. the selected service_type."},
    "ESME_RINVDCS"              : {value: 0x00000104, desc: "Invalid Data Coding Scheme. Specified DCS is invalid or MC does not support it."},
    "ESME_RINVSRCADDRSUBUNIT"   : {value: 0x00000105, desc: "Source Address Sub unit is Invalid."},
    "ESME_RINVDSTADDRSUBUNIT"   : {value: 0x00000106, desc: "Destination Address Sub unit is Invalid."},
    "ESME_RINVBCASTFREQINT"     : {value: 0x00000107, desc: "Broadcast Frequency Interval is invalid. Specified value is either invalid or not supported."},
    "ESME_RINVBCASTALIAS_NAME"  : {value: 0x00000108, desc: "Broadcast Alias Name is invalid. Specified value has an incorrect length or contains invalid/unsupported characters."},
    "ESME_RINVBCASTAREAFMT"     : {value: 0x00000109, desc: "Broadcast Area Format is invalid. Specified value violates protocol or is unsupported."},
    "ESME_RINVNUMBCAST_AREAS"   : {value: 0x0000010A, desc: "Number of Broadcast Areas is invalid. Specified value violates protocol or is unsupported."},
    "ESME_RINVBCASTCNTTYPE"     : {value: 0x0000010B, desc: "Broadcast Content Type is invalid. Specified value violates protocol or is unsupported."},
    "ESME_RINVBCASTMSGCLASS"    : {value: 0x0000010C, desc: "Broadcast Message Class is invalid. Specified value violates protocol or is unsupported."},
    "ESME_RBCASTFAIL"           : {value: 0x0000010D, desc: "broadcast_sm operation failed."},
    "ESME_RBCASTQUERYFAIL"      : {value: 0x0000010E, desc: "query_broadcast_sm operation failed."},
    "ESME_RBCASTCANCELFAIL"     : {value: 0x0000010F, desc: "cancel_broadcast_sm operation failed."},
    "ESME_RINVBCAST_REP"        : {value: 0x00000110, desc: "Number of Repeated Broadcasts is invalid. Specified value violates protocol or is unsupported."},
    "ESME_RINVBCASTSRVGRP"      : {value: 0x00000111, desc: "Broadcast Service Group is invalid. Specified value violates protocol or is unsupported."},
    "ESME_RINVBCASTCHANIND"     : {value: 0x00000112, desc: "Broadcast Channel Indicator is invalid. Specified value violates protocol or is unsupported. Reserved for MC vendor specific errors 0x00000400-0x000004FF Reserved for MC vendor specific errors."}
});

/******************************************************************************
 *
 * Prototype
 * 
 *****************************************************************************/
function SMPP()
{
    this.hdr = {
        command_length: 0,
        command_id: 0,
        command_status: 0,
        sequence_number: 0
    };
}

/* +-------------------------------------------+--------------------------+
 * | PDU Header (mandatory)                    |    PDU Body (Optional)   |
 * +----------+----------+----------+----------+--------------------------+
 * | Command  | Command  | Command  | Sequence |         PDU Body         |
 * |  length  |   id     |  status  |  number  |                          |
 * +----------+----------+----------+----------+--------------------------+
 * | 4 octets | 4 octets | 4 octets | 4 octets | Length = (Command Length |
 * |          |          |          |          |    value - 16) octets    |
 * +----------+----------+----------+----------+--------------------------+
 * | 4 octets |                   Command Length - 4                      |
 * +----------+-----------------------------------------------------------+
 */
SMPP.prototype.fromHexStr = function(hexstr)
{
    var p = hexstr.replace(/\s/g, '');
    var commmand_id = parseInt(p.substring(8, 16), 16);
    this.hdr = {
        command_length: parseInt(p.substring(0, 8), 16),
        command_id: this.cmd_id_str(commmand_id),
        command_status: this.cmd_status_str(parseInt(p.substring(16, 24), 16)),
        sequence_number: parseInt(p.substring(24, 32), 16)
    };

    this.parseBody(commmand_id, p.substring(32, p.length));
}

/**************************************************************************
 * Routine for parsing the fields of a PDU                                *
 * Arguments:                                                             *
 *   body   - PDU body                                                    *
 *   param  - Field of the PDU                                            *
 **************************************************************************/
SMPP.prototype.parseField = function(body, param)
{
    var field_value_hex;

    // Context variable for parisng fields of the PDU (lazy create)
    if (!this.hasOwnProperty("offset"))
        this.offset = 0;

    // lazy create
    if (!this.hasOwnProperty("body"))
        this.body = {};

    if (!this.body.hasOwnProperty("params"))
        this.body.params = {};

    var params = this.body.params;
    switch (param.type) {
        case DT.c_octet_string:
            field_value_hex = this.cutHexStr(body.substring(this.offset));
            params[param.name] = this.hex2a(field_value_hex);
            if (field_value_hex.length < (2 * param.max_len))
                this.offset += field_value_hex.length + 2; // Including '00'
            else
                this.offset += param.max_len + 2; // Including '00'
            break;
        case DT.integer:
            params[param.name] = parseInt(body.substring(this.offset, this.offset+2), 16);
            this.offset += 2 * param.max_len;
            break;
        case DT.octet_string:
            field_value_hex = body.substring(this.offset, 2 * param.max_len); // TODO: Need to set length based on previous _length field
            params[param.name] = this.hex2a(field_value_hex);
            if (field_value_hex.length < (2 * param.max_len))
                this.offset += field_value_hex.length;
            else
                this.offset += param.max_len;
            break;
    }
}

/**************************************************************************
 * Routine for parsing the body of a PDU                                  *
 * Arguments:                                                             *
 *   command_id - SMPP message syntax                                     *
 *   body       - SMPP message body                                       *
 **************************************************************************/
SMPP.prototype.parseBody = function(command_id, body)
{
    for (var cmd_name in COMMANDS) {
        if (COMMANDS[cmd_name].cmd == command_id) {
            var params = COMMANDS[cmd_name].params;
            for (var param in params) {
                this.parseField (body, params[param]);
            }
            return;
        }
    }
    this.body = body;
    return;
}

SMPP.prototype.toHexStr = function()
{
    var command_id = this.cmd_id(this.hdr.command_id);
    return "" +
        (this.hexStr32(this.hdr.command_length) +
         this.hexStr32(command_id) +
         this.hexStr32(this.cmd_status(this.hdr.command_status)) +
         this.hexStr32(this.hdr.sequence_number) +
         this.compileBody(command_id));
}

SMPP.prototype.compileBody = function(command_id)
{
    var str = "";
    for (var cmd_name in COMMANDS) {
        if (COMMANDS[cmd_name].cmd == command_id) {
            var params = COMMANDS[cmd_name].params;
            for (var param in params) {
                switch (params[param].type) {
		    case DT.c_octet_string:
                        str += this.hexStrStr(this.body.params[param]);
			break;
		    case DT.integer:
                        str += this.hexStr8(this.body.params[param]);
			break;
		    case DT.octet_string:
                        var tmp_str = this.hexStrStr(this.body.params[param]);
			str += tmp_str.substring(0, tmp_str.length - 2); // Removing the added '00' at the end
			break;
		}
            }
            return str;
        }
    }
    return this.body;
}

/******************************************************************************
 * Routine to encode JSON format into hex stream
 ******************************************************************************/
SMPP.prototype.toHexStream = function(json)
{
    this.hdr = {
        command_length: json.hdr.command_length,
        command_id: json.hdr.command_id,
        command_status: json.hdr.command_status,
        sequence_number: json.hdr.sequence_number
    };

    if (!this.hasOwnProperty("body"))
        this.body = {};

    if (!this.body.hasOwnProperty("params"))
        this.body.params = {};

    var params = json.body.params;
    for (var param in params) {
	this.body.params[param] = params[param];
    }
    return this.toHexStr();
}

/******************************************************************************
 * Library functions
 */
SMPP.prototype.hexStr8 = function(integer)
{
    var integer_hex = "00" + integer.toString(16).toUpperCase();
    return integer_hex.substr(integer_hex.length - 2);
}

SMPP.prototype.hexStr32 = function(integer)
{
    var integer_hex = "00000000" + integer.toString(16).toUpperCase();
    return integer_hex.substr(integer_hex.length - 8);
}

SMPP.prototype.hexStrStr = function(str)
{
    var hexStr = "";
    for(var i = 0; i < str.length; ++i)
        hexStr += this.hexStr8(str.charCodeAt(i));
    return hexStr + "00";
}

SMPP.prototype.hex2a = function(str)
{
    var str1 = str.replace(/00/,"");
    if (str1.length != 0)    	
        return str1.match(/.{1,2}/g)
                   .map(function(v)
                        {
                        if (parseInt(v, 16) != 0)
			    return String.fromCharCode(parseInt(v, 16));
                        })
                   .join('');
    else
	return str1;
}

SMPP.prototype.hex2ucs = function(str)
{
    var str1 = str.replace(/\s/g,'');
    if (str1.length != 0)    	
        return str1.match(/.{1,4}/g)
                   .map(function(v)
                        {
                        return String.fromCharCode(parseInt(v, 16));
			})
                   .join('');
}

SMPP.prototype.cutHexStr = function(str)
{
    var val = str.match(/^(.*?)00/)[1];
    if (val.length % 2)
        val += "0"; // For cases like '012000'
    return val;
}
/*****************************************************************************/

/******************************************************************************
 * Static functions
 */
SMPP.prototype.cmd_id_str = function(cmdid)
{
    for (var cmd_name in COMMANDS)
        if (COMMANDS[cmd_name].cmd == cmdid)
            return cmd_name;

    var cmdid_hex = "0x" + this.hexStr32(cmdid);
    if (cmdid >= 0x00010200 && cmdid <= 0x000102FF)
        return "reserved_mc_req_" + cmdid_hex;
    else if (cmdid >= 0x80010200 && cmdid <= 0x800102FF)
        return "reserved_mc_resp_" + cmdid_hex;
    else if (cmdid & 0x80000000)
        return "reserved_resp_" + cmdid_hex;
    else
        return "reserved_req_" + cmdid_hex;
}

SMPP.prototype.cmd_id = function(cmdidstr)
{
    if (COMMANDS.hasOwnProperty(cmdidstr))
        return COMMANDS[cmdidstr].cmd;

    return parseInt(cmdidstr.match(/0x[0-9A-Ba-b]+/g)[0]);
}

SMPP.prototype.cmd_status_str = function(status_int)
{
    for (var cmd_status in STATUS)
        if (STATUS[cmd_status].value == status_int)
            return cmd_status;

    var status_hex = "0x" + this.hexStr32(status_int);
    if (status_int >= 0x00000400 && status_int <= 0x000004FF)
        return "ESME_RMCVND_" + status_hex;
    else
        return "ESME_RRSVD_" + status_hex;
}

SMPP.prototype.cmd_status = function(statusstr)
{
    if (STATUS.hasOwnProperty(statusstr))
        return STATUS[statusstr].value;

    return parseInt(statusstr.match(/0x[0-9A-Ba-b]+/g)[0]);
}
/*****************************************************************************/
