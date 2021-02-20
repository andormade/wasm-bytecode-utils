export enum Instruction {
	/** Unreachable */
	UNREACHABLE = 0x00,
	/** No-Op. It does nothing. */
	NOP = 0x01,
	/** Pushes an entry onto the control-flow stack. */
	BLOCK = 0x02,
	/** Binds a label to the current position, and pushes an entry onto the control-flow stack. */
	LOOP = 0x03,
	/** If */
	IF = 0x04,
	/** Else */
	ELSE = 0x05,
	/** Pops an entry from the control-flow stack. */
	END = 0x0b,
	/** Unconditional branch */
	BR = 0x0c,
	/** Conditional branch */
	BR_IF = 0x0d,
	/** Table branch */
	BR_TABLE = 0x0e,
	/** Return */
	RETURN = 0x0f,
	CALL = 0x10,
	/** Drop */
	DROP = 0x1a,
	/** Get Local */
	LOCAL_GET = 0x20,
	/** Set Local */
	LOCAL_SET = 0x21,
	I32_LOAD = 0x28,
	F32_LOAD = 0x2a,
	I32_STORE = 0x36,
	/** varsint32 constant */
	I32_CONST = 0x41,
	/** varsint64 constant */
	I64_CONTS = 0x42,
	/** float32 constant */
	F32_CONST = 0x43,
	/** float64 constant */
	F64_CONST = 0x44,
	/** Integer Equality */
	I32_EQ = 0x46,
	/**  Integer Less Than, Signed */
	I32_LT_S = 0x48,
	/** Integer Less Than or Equal To, Signed */
	I32_LE_S = 0x4c,
	/** Integer Greater Than or Equal To, Signed */
	I32_GE_S = 0x4e,
	/** Integer Greater Than or Equal To, Unsigned */
	I32_GE_U = 0x4f,
	I32_ADD = 0x6a,
	I32_SUB = 0x6b,
	I32_MUL = 0x6c,
	I32_DIV_S = 0x6d,
	I32_DIV_U = 0x6e,
	F32_STORE = 0x83,
	F32_ADD = 0x92,
	F32_SUB = 0x93,
	F32_MUL = 0x94,
	F32_DIV = 0x95,
}

export enum Type {
	VOID = 0x40,
	I32 = 0x7f,
	F32 = 0x7d,
}

export enum Section {
	CUSTOM = 0x00,
	TYPE = 0x01,
	IMPORT = 0x02,
	FUNCTION = 0x03,
	MEMORY = 0x05,
	EXPORT = 0x07,
	CODE = 0x0a,
}
